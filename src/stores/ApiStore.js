import { observable, action } from "mobx";
import axios from "axios";

class ApiStore {
  @observable upcoming = {};
  @observable nowPlaying = {};
  @observable popular = {};
  @observable genre = {};

  // language: "ko-KR"

  @observable movieApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
      api_key: `${process.env.REACT_APP_KEY}`,
      language: "en-US",
    },
  });

  @action
  getUpcoming() {
    this.movieApi
      .get(`movie/upcoming`)
      .then((res) => {
        this.upcoming = res.data.results;
        console.log(":::getUpcoming", this.upcoming);
      })
      .catch((error) => console.log(":::upcoming_error: " + error));
  }

  @action
  getNowPlaying() {
    this.movieApi
      .get(`movie/now_playing`)
      .then((res) => {
        this.nowPlaying = res.data.results;
        console.log(":::getNowPlaying", this.nowPlaying);
      })
      .catch((error) => console.log(":::nowPlaying_error: " + error));
  }

  @action
  getPopular() {
    this.movieApi
      .get(`movie/popular`)
      .then((res) => {
        this.popular = res.data.results;
        console.log(":::getPopular", this.popular);
      })
      .catch((error) => console.log(":::getPopular_error" + error));
  }

  @action
  getGenre() {
    this.movieApi
      .get(`genre/movie/list`)
      .then((res) => {
        this.genre = res.data.genres;
        console.log(":::getGenre", this.genre);
      })
      .catch((error) => console.log(":::getGenre_error" + error));
  }
}

export default ApiStore;
