import React from "react";
import Poster from "../Poster";
import Loading from "../Loading";

const Nowplaying = ({ loading, nowPlaying }) =>
  loading ? (
    <Loading />
  ) : (
    <div className="section-current-movies">
      <p>현재상영작</p>
      <div className="section-current-roll">
        {nowPlaying.map((movie) => (
          <Poster
            imageUrl={movie.poster_path}
            rating={movie.vote_average}
            name={movie.title}
            year={movie.release_date.substring(0, 4)}
            id={movie.id}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );

export default Nowplaying;
