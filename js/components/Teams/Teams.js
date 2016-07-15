import React, { Component, PropTypes } from 'react';

import * as util from '../../util/util';

import './teams.css';

class Teams extends Component {
	constructor(props) {
		super(props);
	}

	static propTypes = {
    	teams: PropTypes.object.isRequired
  	}

	static contextTypes = {
    	router: React.PropTypes.object
  	}

  	componentWillMount() {
  	    const { actions } = this.props;
  		actions.fetchTeams();
  	}

	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	openTeamView(team) {
		team = team.replace(/\s/g, '-');
		this.context.router.push('/teams/' + team.toLowerCase());
	}

	render() {
		console.log('Teams', this.props)

		var filteredTeams = this.props.teams.teams.filter((res, i) => {
			return res.Group === this.props.teams.activeGroupFilter || this.props.teams.activeGroupFilter === "SHOW ALL";
		});

		return (
				<div className="teams-container">
					{filteredTeams ? filteredTeams.map((result, i) => {
						return <div className="team-item" style={util.getTeamColor()} key={i} onClick={this.openTeamView.bind(this, result.Team)}>
							<div className="team-group">{result.Group}</div>
							<div className="team-title">{result.Team}</div>
							<div className="team-coach clearfix">
								<div>Coach</div>
								<div>{result.Coach}</div>
							</div>
							<div className="team-bio">{result.Bio}</div>
							<div className="team-rank clearfix">
								<div>FIFA Ranking</div>
								<div>{result['FIFA ranking']}</div>
							</div>
						</div>
					}) : <div>Loading teams...</div>}
				</div>
		);
	}
}

export default Teams;
