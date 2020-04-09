import React from "react";
import tmpimg from "../img/우리집.png";

const POP_Poster = ({ imageUrl, name, overview, genres, id }) => {
  let style = imageUrl
    ? {
        backgroundImage: `url("https://image.tmdb.org/t/p/w1280/${imageUrl}")`,
      }
    : { backgroundImage: `${tmpimg}` };
  return (
    <li style={style}>
      <p>
        <span className="main-roll-title">{name}</span>
        <span>{genres}</span>
        <br />
        {overview} <br />
        <span className="main-roll-playbtn">Play Now</span>
        <span className="main-roll-addbtn">Add to favourites</span>
      </p>
    </li>
  );
};

export default POP_Poster;
