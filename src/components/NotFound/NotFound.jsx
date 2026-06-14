import { Link } from "react-router";
import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.text}>Такої сторінки не існує</p>
      <Link to="/"> ← На головну</Link>
    </div>
  );
};
