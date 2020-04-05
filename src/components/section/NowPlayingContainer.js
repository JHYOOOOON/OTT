import React, { Component } from "react";
import NowPlaying from "./NowPlaying";
import { observer, inject } from "mobx-react";

@inject("apiStore")
@observer
class NowPlayingContainer extends Component {
  render() {
    const getMovies = async () => {
      const {
        data: { results: nowPlaying },
      } = await this.props.apiStore.getNowPlaying();
    };
    const { isLoading } = this.props.apiStore;
    return <NowPlaying loading={isLoading} nowPlaying={nowPlaying} />;
  }
}

export default NowPlayingContainer;
