import React, { Component, PropTypes } from 'react';

import './options.css';

class Options extends Component {
	constructor(props) {
		super(props);
	}

	static propTypes = {
  		teams: PropTypes.object.isRequired
  	}

	toggleTeams() {
		const { actions } = this.props;
		actions.toggleTeams();
	}

	toggleStandings() {
		const { actions } = this.props;
		actions.toggleStandings();
	}

	render() {
		console.log('asdasd', this.props.teams)

		return (
		    <div className="options-container">
		    	<div className={this.props.teams.isTeamsActive ? "active-option" : null} onClick={this.toggleTeams.bind(this)}>SHOW TEAMS</div>
		    	<div className={this.props.teams.isStandingsActive ? "active-option" : null} onClick={this.toggleStandings.bind(this)}>SHOW STANDINGS</div>
			</div>
		);
	}
}

export default Options;
