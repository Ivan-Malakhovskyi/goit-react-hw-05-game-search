import { Route, Routes } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Games } from "./components/Games";
import { GameDetails } from "./components/GameDetails";
import { Reviews } from "./components/Reviews";
import { NewReview } from "./components/NewReview";
import { NotFound } from "./components/NotFound";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="games" element={<Games />} />
        <Route path="games/:gameId" element={<GameDetails />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="reviews/new" element={<NewReview />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
