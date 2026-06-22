import { Link, useLocation } from "react-router";
import styles from "./GameList.module.css";

const GameList = ({ games }) => {
  const location = useLocation();

  return (
    <ul className={styles.grid}>
      {games?.map(({ id, background_image, name, genres }) => (
        <li key={id}>
          <Link to={`/games/${id}`} state={{ from: location }}>
            <img
              className={styles.cardImage}
              src={background_image}
              alt={name}
            />

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>{name}</h3>
              <p className={styles.cardGenre}>
                {genres.map(({ name }) => (
                  <span>{name}</span>
                ))}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default GameList;
