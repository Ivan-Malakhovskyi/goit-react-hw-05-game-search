import { Link } from "react-router";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div>
      <p className={styles.emoji}>🎮</p>
      <h1 className={styles.title}>Game Search</h1>
      <p className={styles.subtitle}>Знайди свою наступну улюблену гру</p>
      <Link to="/games" className={styles.button}>
        Перегянути ігри
      </Link>
    </div>
  );
};
