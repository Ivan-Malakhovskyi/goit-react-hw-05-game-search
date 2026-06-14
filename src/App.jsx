import { Link, NavLink, Outlet, Route, Routes } from "react-router";
import styles from "./App.module.css";
import { Games } from "./components/Games";
import { GameInfo } from "./components/GameInfo";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Logo</Link>

        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/games"
          className={({ isActive }) => (isActive ? `${styles.active}` : "")}
        >
          Games
        </NavLink>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <h1>
              Root <Outlet />
            </h1>
          }
        >
          <Route index element={<p>Home</p>} />
          <Route path="about" element={<div>About</div>} />
          <Route path="games" element={<Games />} />
          <Route path="games/:gameId" element={<GameInfo />} />

          <Route path="/more" element={<h2>More</h2>}>
            <Route path="details" element={<div>Details</div>} />
            <Route path="info" element={<div>Info</div>} />
          </Route>

          <Route
            path="*"
            element={
              <h1>
                Not Found page <Link to="/">Back to the home</Link>{" "}
              </h1>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
