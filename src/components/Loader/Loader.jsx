import styles from "./PageLoader.module.css";

function Loader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner} />
      <p className={styles.text}>Завантаження...</p>
    </div>
  );
}

export default Loader;
