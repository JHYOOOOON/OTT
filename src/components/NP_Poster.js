import React from "react";
import tmpimg from "../img/우리집.png";

const NP_Poster = ({ imageUrl, rating, name, year, id }) => (
  <div>
    <img
      src={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : tmpimg}
      alt=""
    />
    <div className="current-text">
      {name}
      <br />
      {rating}/10
    </div>
  </div>
);

export default NP_Poster;
