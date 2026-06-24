import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { getByQuery } from "../API/gameService";
import { useQueryParams } from "../hooks/useQueryParams";
import { Loader } from "../Loader";
import GameList from "../GameList/GameList";
import styles from "./Search.module.css";

const Search = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { searchGame, handleFormSubmit } = useQueryParams({ games });
  const [searchFailed, setSearchFailed] = useState(false);

  const controller = useRef();

  useEffect(() => {
    if (controller.current) {
      controller.current.abort();
    }

    controller.current = new AbortController();

    const fetchByID = async () => {
      setSearchFailed(false);

      try {
        setLoading(true);
        setError(null);

        const resp = await getByQuery(searchGame, controller);

        if (resp?.length === 0 && searchGame) {
          setSearchFailed(true);
          toast.error("Таку гру не знайдено");
        }

        setGames(resp);
      } catch (error) {
        if (error.code !== "ERR_CANCELLED") {
          console.log(error.name);
          setError(error);
        }
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchByID();

    return () => {
      controller.current.abort();
    };
  }, [searchGame]);

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          name="game"
          type="text"
          placeholder="Пошук гри..."
          className={styles.search}
        />

        <button className={styles.submitBtn}>Знайти</button>
      </form>

      {loading ? (
        <Loader />
      ) : (
        games && games.length !== 0 && <GameList games={games} />
      )}

      {searchFailed && games.length === 0 && !loading && (
        <div>Таку гру не знайдено</div>
      )}

      {!games && !loading && error && <div>Щось пішло не так 😢</div>}

      <Toaster />
    </>
  );
};

export default Search;
