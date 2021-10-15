import React from "react";
import { ProjectBody } from "../containers/body/components/ProjectBody";
import { Loading } from "../containers/body/Loading";

const url = process.env.REACT_APP_SERVER + "/projects";

export default class ProjectsData extends React.Component {
  state = {
    loading: true,
    projects: null,
  };
  async componentDidMount() {
    const res = await fetch(url);
    const data = await res.json();
    this.setState({ projects: data, loading: false });
  }
  render() {
    return (
      <>
        {this.state.loading || !this.state.projects ? (
          <Loading />
        ) : (
          <ProjectBody data={this.state.projects} />
        )}
      </>
    );
  }
}
