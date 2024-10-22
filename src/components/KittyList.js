import React from "react";
import KittyCard from "./KittyCard";


function KittyList({ kittys }) {
  console.log(kittys)

  const displaykittys = kittys.map((kitty) => (
    <KittyCard
      key={kitty.id}
      kitty={kitty}
    />
  ))



  return (
    <ul className="cards">{displaykittys}</ul>
  );
}

export default KittyList;
