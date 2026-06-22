import { Suspense } from "react";
import { Link, NavLink, Outlet } from "react-router";
import styles from "./Layout.module.css";
import { Loader } from "../Loader";

export const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link to="/">Logo</Link>

        <nav className={styles.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.navLinkActive}` : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? `${styles.navLinkActive}` : ""
            }
          >
            Games Search
          </NavLink>
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <main className={styles.main}>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
};
