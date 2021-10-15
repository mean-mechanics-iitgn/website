import React from "react";
import { TutorialBody } from "../containers/body/components/TutorialBody";
import { Loading } from "../containers/body/Loading";

const url = process.env.REACT_APP_SERVER + "/tutorials";

export default class TutorialsData extends React.Component {
  state = {
    loading: true,
    data: null,
  };
  async componentDidMount() {
    const res = await fetch(url);
    const data = await res.json();
    this.setState({ data: data, loading: false });
  }
  render() {
    return (
      <>
        {this.state.loading || !this.state.data ? (
          <Loading />
        ) : (
          <TutorialBody data={this.state.data} />
        )}
      </>
    );
  }
}
