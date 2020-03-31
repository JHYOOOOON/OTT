import { observable, action } from "mobx";
import axios from "axios";
class ApiStore {
  @observable data = {};
  @observable isLoading = false;

  @observable api = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params:{
      api_key:`${process.env.REACT_APP_KEY}`,
      language:"Ko"
    }
  });

  @action
  nowPlaying() {
    this.api.get("movie/now_playing")
    // axios
    //   .get(
    //     `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_KEY}&language=Ko` 
    //   )
    //   .then(res => {
    //     this.data = res;
    //     this.isLoading = true;
    //     console.log("");
    //   })
    //   .catch(error => console.log("error: ", error));
  }
}

export default ApiStore;
