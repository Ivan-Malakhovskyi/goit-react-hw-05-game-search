import { Link, NavLink, Outlet, useLocation, useParams } from "react-router";
import { useEffect, useRef, useState } from "react";
import { getGameById } from "../API/gameService";
import { Loader } from "../Loader";
import styleGames from "../GameList/GameList.module.css";
import styles from "./GameDetails.module.css";

const GameDetails = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [gameDetail, setGameDetail] = useState([]);
  const { gameId } = useParams();

  const location = useLocation();

  const controller = useRef();

  const backLinkLocation = location?.state?.from ?? "/";

  useEffect(() => {
    if (!gameId) return;

    const getMovieById = async () => {
      if (controller.current) {
        controller.current.abort();
      }

      controller.current = new AbortController();

      try {
        setLoading(true);

        const resp = await getGameById(gameId, controller);

        setGameDetail(resp);
      } catch (error) {
        if (error.code !== "ERR_CANCELLED") {
          setError(error);
          console.log(error);
        }
      } finally {
        setLoading(false);
      }
    };

    getMovieById();
  }, [gameId]);

  return (
    <>
      {loading && <Loader />}

      <Link to={backLinkLocation} className={styles.back}>
        Повернутися до колекції
      </Link>

      <h1>GameInfo</h1>

      {error && !gameDetail && <div>Щось пішло не так</div>}

      {!gameId ? (
        <div className={styles.notFound}>
          <p className={styles.notFoundIcon}>😢</p>
          <h3 className={styles.notFoundText}>Такої гри не знайдено</h3>

          <Link className={styles.backLink} state={{ from: location }}>
            повернутися до колекції
          </Link>
        </div>
      ) : (
        gameDetail && (
          <div className={styleGames.card}>
            <img
              className={styleGames.cardImage}
              src={gameDetail.background_image}
              alt={name}
            />

            <span className={styleGames.cardHeader}>{gameDetail.released}</span>
            <div>
              <h1 className={styleGames.cardTitle}>{gameDetail.name}</h1>
              <p className={styleGames.cardGenre}>{gameDetail.genre}</p>
            </div>

            <p className={styleGames.cardDesc}>{gameDetail.description}</p>

            <div>
              <span>{gameDetail.year}</span>
              <span>{gameDetail.platform}</span>
            </div>

            <div className={styleGames.tab}>
              <NavLink
                to={`/games/${gameId}/reviews`}
                className={({ isActive }) =>
                  isActive ? `${styleGames.tab} ${styleGames.tabActive}` : ""
                }
              >
                Відгуки
              </NavLink>

              <NavLink
                to={`/games/${gameId}/reviews/new`}
                className={({ isActive }) =>
                  isActive ? `${styles.tab} ${styles.tabActive}` : ""
                }
              >
                Новий відгук
              </NavLink>
            </div>

            <div>
              <Outlet />
            </div>
          </div>
        )
      )}
    </>
  );
};

export default GameDetails;
