import { Link, useLocation, useSearchParams } from "react-router";
import { games } from "../../dataSeed/games";
import styles from "./Games.module.css";
import { useEffect, useRef, useState } from "react";
import { getAll } from "../API/gameService";

const GENRES = [
  "All",
  "Action",
  "RPG",
  "Shooter",
  "Strategy",
  "Indie",
  "Sports",
];

export const Games = () => {
  return (
    <>
      <h1 className={styles.title}>Games</h1>

      {/* <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Пошук гри..."
        className={styles.search}
      /> */}

      <ul className={styles.grid}>
        {games.map(({ id, img, title, genre, rating }) => (
          <li key={id}>
            <Link to={`/games/${id}`}>
              <span>{img}</span>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardGenre}>{genre}</p>
                <p className={styles.cardRating}>{"⭐".repeat(rating)}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
