import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import SectionWrap from "../section/SectionWrap";

@inject("apiStore")
@observer
class SectionContainer extends Component {
  state = {
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      this.props.apiStore.getUpcoming();
      this.props.apiStore.getNowPlaying();
      this.props.apiStore.getPopular();
      this.props.apiStore.getGenre();
    } catch {
      this.setState({ error: "error" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { upcoming, nowPlaying, popular, genre } = this.props.apiStore;
    return (
      <SectionWrap
        loading={this.state.loading}
        error={this.state.error}
        upcoming={upcoming}
        nowPlaying={nowPlaying}
        popular={popular}
        genre={genre}
      />
    );
  }
}

export default SectionContainer;
