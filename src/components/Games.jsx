import React from "react";
import { useLocation, Link, useSearchParams } from "react-router";

const Games = () => {
  // const location = useLocation();
  // const { from, gameName } = location.state ?? {};

  // const backPath = location.state?.from || "/games";

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q") ?? "";

  setSearchParams((prev) => {
    prev.set("q", "minecraft");

    return prev;
  });

  // setSearchParams((prev) => {
  //   prev.delete("q");
  //   return prev;
  // });

  console.log(searchParams.has("q"));
  console.log(searchParams.getAll("tag"));

  console.log("🚀 ~ Games ~ query:", query);

  return (
    <div>
      Games
      <Link
        state={{ from: location.pathname + location.search }}
        to={`/games/1234`}
      >
        Game Title
      </Link>
    </div>
  );
};

export default Games;
