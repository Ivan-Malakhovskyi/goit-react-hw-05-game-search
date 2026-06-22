import { Link } from "react-router";
import stylesGames from "../Games/Games.module.css";

const SearchGames = ({ games }) => {
  return (
    <ul className={stylesGames.grid}>
      {games?.map(({ id, name, background_image, genres, released }) => (
        <li key={id}>
          <Link to={`/games/${id}`}>
            <span className={stylesGames.cardHeader}>{released}</span>
            <img
              className={stylesGames.cardImage}
              src={background_image}
              alt={name}
            />
            <div className={stylesGames.card}>
              <h3 className={stylesGames.cardTitle}>{name}</h3>
              <p className={stylesGames.cardGenre}>
                {genres.map(({ id, name }) => (
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

export default SearchGames;
