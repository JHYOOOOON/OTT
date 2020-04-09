import React from "react";
import tmpimg from "../img/우리집.png";

const UP_Poster = ({ imageUrl, name, date, id }) => {
  let style = imageUrl
    ? {
        backgroundImage: `url("https://image.tmdb.org/t/p/w1280/${imageUrl}")`,
      }
    : { backgroundImage: `${tmpimg}` };
  return (
    <div style={style}>
      <div className="schedule-text">
        <span>{name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default UP_Poster;
