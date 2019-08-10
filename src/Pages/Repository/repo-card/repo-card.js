import React, { Component } from 'react';

class RepoCard extends Component {

	constructor(props){
		super(props);
		
	}
	
	render(){
		const {name, description} = this.props;
		return (
			<div>
				<h2 className="title is-4">{name}</h2>
			    <p>{description}</p>
			    <hr/>
			</div>  

		);
	}

}

export default RepoCard;