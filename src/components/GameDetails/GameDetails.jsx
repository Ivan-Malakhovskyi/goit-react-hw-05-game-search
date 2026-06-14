import { Link, NavLink, Outlet, useParams } from "react-router";
import { games } from "../../dataSeed/games";
import styles from "./GameDetails.module.css";

export const GameDetails = () => {
  const { gameId } = useParams();

  const game = games.find(({ id }) => id === Number(gameId));

  if (!game) {
    return (
      <div className={styles.notFound}>
        <p className={styles.notFoundIcon}>😢</p>
        <h3 className={styles.notFoundText}>Такої гри не знайдено</h3>

        <Link className={styles.backLink} to="/games">
          повернутися до колекції
        </Link>
      </div>
    );
  }

  return (
    <>
      <h1>GameInfo</h1>

      <Link to="/games" className={styles.back}>
        Повернутися до колекції
      </Link>

      <div className={styles.card}>
        <span className={styles.cardHeader}>{game.img}</span>
        <div>
          <h1 className={styles.cardTitle}>{game.title}</h1>
          <p className={styles.cardGenre}>{game.genre}</p>
          <p className={styles.cardRating}>{"⭐".repeat(game.rating)}</p>
        </div>

        <p className={styles.cardDesc}>{game.description}</p>

        <div>
          <span>{game.year}</span>
          <span>{game.platform}</span>
        </div>

        <div className={styles.tab}>
          <NavLink
            to={`/games/${gameId}/reviews`}
            className={({ isActive }) =>
              isActive ? `${styles.tab} ${styles.tabActive}` : ""
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
    </>
  );
};
