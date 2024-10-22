import React from "react";

function KittyCard({ kitty }) {


  return (
    <li className="card">
      <img src={kitty.image} alt={kitty.name} />
      <h4>{kitty.name}</h4>
      <button id={kitty.id} className="primary">About Me</button>
    </li>
  );
}

export default KittyCard;
