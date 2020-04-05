import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import SectionWrapTmp from "../section/SectionWrapTmp";

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
    } catch {
      this.setState({ error: "error" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { upcoming, nowPlaying } = this.props.apiStore;
    console.log(this.props.apiStore.nowPlaying);
    return (
      <SectionWrapTmp
        loading={this.state.loading}
        error={this.state.error}
        upcoming={upcoming}
        nowPlaying={nowPlaying}
      />
    );
  }
}

export default SectionContainer;
