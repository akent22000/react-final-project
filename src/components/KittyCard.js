import React from "react";
import { Link, useOutletContext } from "react-router-dom";

function KittyCard({ kitty }) {
  // const kittys = useOutletContext();


  return (
    <li className="card">
      <img src={kitty.image} alt={kitty.name} />
      <h4>{kitty.name}</h4>
      {/* <button id={kitty.id} className="primary">About Me</button> */}
      <Link to={`/profile/${kitty.id}`}>View profile</Link>
    </li>
  );
}

export default KittyCard;
