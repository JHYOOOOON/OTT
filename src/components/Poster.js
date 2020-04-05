import React from "react";

const Poster = ({ imageUrl, rating, name, year, id }) => (
  <div>
    <img src={imageUrl} alt="" />
    <div className="current-text">
      {name}
      <br />
      {rating}/10
    </div>
  </div>
);

export default Poster;
