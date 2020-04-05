/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Loading from "../Loading";
import NP_Poster from "../NP_Poster";

const SectionWrapTmp = ({ loading, error, upcoming, nowPlaying }) =>
  loading ? (
    <Loading />
  ) : (
    nowPlaying &&
    nowPlaying.length > 0 && (
      <div className="section-current-movies">
        <p>현재상영작</p>
        <div className="section-current-roll">
          {nowPlaying.map((movie) => (
            <NP_Poster
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
    )
  );

export default SectionWrapTmp;
