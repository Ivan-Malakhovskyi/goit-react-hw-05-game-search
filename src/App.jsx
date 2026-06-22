import { Route, Routes } from "react-router";
import { lazy } from "react";
import { Layout } from "./components/Layout";

const Home = lazy(() => import("./components/Home/Home"));
const Search = lazy(() => import("./components/Search/Search"));
const GameDetails = lazy(() => import("./components/GameDetails/GameDetails"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));
const NewReview = lazy(() => import("./components/NewReview/NewReview"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />} />

        <Route path="games/:gameId" element={<GameDetails />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="reviews/new" element={<NewReview />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
