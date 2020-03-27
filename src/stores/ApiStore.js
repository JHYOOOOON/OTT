import { observable, action } from "mobx";
import axios from "axios";
class ApiStore {
  @observable data = {};
  @observable test = {};

  @action
  getData() {
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_KEY}&query=terminator&language=en-US&page=1&include_adult=false` // multi search (movie, tv etc)
        // `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY}&query=terminator&language=en-US&page=1&include_adult=false` // search movie - query: keyword
        // `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1` // upcoming movie
      )
      .then(res => (this.data = res))
      .catch(error => console.log("error: ", error));
  }
}

export default ApiStore;
