import { useState } from "react";
import { useSearchParams } from "react-router";
import toast from "react-hot-toast";

export const useQueryParams = ({ games }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [, setSearchFailed] = useState(false);
  const searchGame = searchParams.get("q") ?? "";

  const updateQuery = () => {
    const newParams = searchGame !== "" ? { q: searchGame } : {};
    setSearchParams(newParams);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const gameSearch = e.target.game.value.trim();

    if (!gameSearch) {
      toast.error("Введіть назву гри");
      return;
    }

    if (!games && games?.length === 0) {
      setSearchFailed(true);
      toast.error("Ігор не знайдено");
      return;
    }

    searchParams.set("q", gameSearch);
    setSearchParams(searchParams);
    e.target.reset();
  };

  return {
    searchGame,
    updateQuery,
    handleFormSubmit,
  };
};
