import { observable, action } from "mobx";
import axios from "axios";

class ApiStore {
  @observable upcoming = {};
  @observable nowPlaying = {};

  @observable movieApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
      api_key: `${process.env.REACT_APP_KEY}`,
      language: "Ko",
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
}

export default ApiStore;
