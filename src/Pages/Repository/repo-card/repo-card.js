import React, { Component } from 'react';

class RepoCard extends Component {

	constructor(props){
		super(props);
		
	}
	
	render(){
		const {name, description} = this.props;
		return (
			<div>
				<p> {name}</p>
				<p> {description} </p>
			</div>
		);
	}

}

export default RepoCard;