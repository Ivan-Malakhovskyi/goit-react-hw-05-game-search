import {
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router";
import styles from "./App.module.css";
import { lazy, Suspense } from "react";
// import Games from "./components/Games";
// import GameInfo from "./components/GameInfo";

const Games = lazy(() => import("./components/Games"));
const GameInfo = lazy(() => import("./components/GameInfo"));

function App() {
  const navigate = useNavigate();
  // const location = useLocation();
  // console.log("🚀 ~ App ~ location:", location);

  // navigate("/games");

  // navigate(-1);

  // navigate(-2);

  // navigate("/games", {
  //   state: {
  //     from: "/games?q=mine",
  //     gameName: "name",
  //   },
  // });

  // const isGamesPath = pathname.startsWith("/games");
  // const isExist = pathname.includes("/reviews");

  const location = useLocation();

  const backPath = location.state?.from || "/games";

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

          <Route
            path="/more"
            element={
              <h2>
                More
                <Link
                  to="/more/details
                "
                >
                  Review
                </Link>
              </h2>
            }
          >
            <Route
              path="details"
              element={
                <div>
                  <button type="button" onClick={() => navigate(backPath)}>
                    Back link
                  </button>
                </div>
              }
            />
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
