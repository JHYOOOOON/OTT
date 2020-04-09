import React from "react";
import tmpimg from "../img/우리집.png";

const NP_Poster = ({ imageUrl, rating, name, year, overview, id }) => (
  <div>
    <img
      src={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : tmpimg}
      alt=""
    />
    <div className="current-text">
      <span>{name}</span>
      <span>{year}</span>
      <span role="img" aria-label="star">
        ⭐
      </span>
      <span>{rating}/10</span>
      <div className="current-description">
        {overview.length > 55 ? `${overview.substring(0, 55)}...` : overview}
      </div>
    </div>
  </div>
);

export default NP_Poster;
