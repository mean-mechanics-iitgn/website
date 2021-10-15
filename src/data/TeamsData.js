import React from "react";
import { Loading } from "../containers/body/Loading";
import { TeamBody } from "../containers/body/components/TeamBody";

// import { OneProject } from "../containers/body/OneProject"
// import { ProjectBody } from "../containers/body/components/ProjectBody";

const url = process.env.REACT_APP_SERVER+"/teams";


export default class TeamsData extends React.Component {
    state = {
        loading: true,
        teams: null
    };
    async componentDidMount() {
        const res = await fetch(url);
        const data = await res.json();
        this.setState({ teams: data, loading: false })
    }
    render() {
        return (<>
                {this.state.loading ?
                    <Loading/>
                    :
                    <TeamBody data={this.state.teams}/>
                }
            </>)
    }
}
