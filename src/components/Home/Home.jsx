import { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import GameList from "../GameList/GameList";
import { getAll } from "../API/gameService";
import { Loader } from "../Loader";

const Home = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const controller = useRef();

  useEffect(() => {
    const fetchFilms = async () => {
      if (controller.current) {
        controller.current.abort();
      }

      controller.current = new AbortController();

      try {
        setLoading(true);

        const resp = await getAll(controller);

        setGames(resp);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(error);
          console.log(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, []);

  return (
    <section>
      <p className={styles.emoji}>🎮</p>
      <h1 className={styles.title}>Game Search</h1>
      <p className={styles.subtitle}>Знайди свою наступну улюблену гру</p>

      {!games && !loading && error && <div>Шось пішло не так 😢</div>}

      {loading ? (
        <Loader />
      ) : (
        games && games.length > 0 && <GameList games={games} />
      )}
    </section>
  );
};

export default Home;
