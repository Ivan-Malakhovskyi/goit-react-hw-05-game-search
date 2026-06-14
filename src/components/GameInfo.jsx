import React from "react";
import { useParams } from "react-router";

export const GameInfo = () => {
  const params = useParams();

  const obj = {
    a: 5,
    b: 7,
  };
  console.dir(obj);
  console.table("🚀 ~ GameInfo ~ params:", params);

  return <div>GameInfo </div>;
};
