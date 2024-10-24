import React from "react";
import { Link, useOutletContext } from "react-router-dom";

function KittyCard({ kitty }) {
  const kittys = useOutletContext();
  // console.log(kittys);

  return (
    <li className="card">
      <img src={kitty.image} alt={kitty.name} />
      <h4>{kitty.name}</h4>
      <button id={kitty.id} className="primary">
        <Link to={`/profile/${kitty.id}`}>About Me</Link></button>
    </li>
  );
}

export default KittyCard;
