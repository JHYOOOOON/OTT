/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Loading from "../Loading";
import NP_Poster from "../NP_Poster";
import UP_Poster from "../UP_Poster";
import POP_Poster from "../POP_Poster";

const SectionWrap = ({
  loading,
  error,
  upcoming,
  nowPlaying,
  popular,
  genre,
}) =>
  loading ? (
    <Loading />
  ) : (
    <section className="section-wrap">
      {popular.length > 0 && genre.length > 0 && (
        <div className="section-main_roll">
          <ul>
            {popular.map((movie) => {
              let genres = [];
              for (let num of movie.genre_ids) {
                let index = genre.findIndex((a) => a.id === num);
                genres.push(genre[index].name);
              }
              return (
                <POP_Poster
                  imageUrl={movie.poster_path}
                  name={movie.title}
                  overview={movie.overview}
                  genres={genres}
                  id={movie.id}
                  key={movie.id}
                />
              );
            })}
          </ul>
        </div>
      )}
      {nowPlaying && nowPlaying.length > 0 && (
        <div className="section-current-movies">
          <p>현재상영작</p>
          <div className="section-current-roll">
            {nowPlaying.map((movie) => (
              <NP_Poster
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                name={movie.title}
                year={movie.release_date.substring(0, 4)}
                overview={movie.overview}
                id={movie.id}
                key={movie.id}
              />
            ))}
          </div>
        </div>
      )}
      {upcoming && upcoming.length > 0 && (
        <div className="section-schedule-movies">
          <p>개봉예정작</p>
          <div className="section-schedule-roll">
            {upcoming.map((movie) => (
              <UP_Poster
                imageUrl={movie.poster_path}
                name={movie.title}
                date={movie.release_date}
                id={movie.id}
                key={movie.id}
              />
            ))}
          </div>
        </div>
      )}
      {error && <div>error</div>}
    </section>
  );

export default SectionWrap;
