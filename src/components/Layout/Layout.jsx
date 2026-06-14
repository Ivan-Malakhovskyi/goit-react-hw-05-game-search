import { Link, NavLink, Outlet } from "react-router";
import styles from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link to="/">Logo</Link>

        <nav>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.navLinkActive}` : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/games"
            className={({ isActive }) =>
              isActive ? `${styles.navLinkActive}` : ""
            }
          >
            Games
          </NavLink>
        </nav>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};
