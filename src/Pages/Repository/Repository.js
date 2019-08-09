import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import RepoCard from './repo-card';
import SearchFilter from './search-filter';

import store from "../../data";
import { connect } from "react-redux";

function mapStateToProps(state) {
  const { user, repositories } = state;
  console.log(state);
  return { 
    user: user , 
    repositories: repositories
  }
}

class Repository extends Component {
	state = {
		name: "",
		description: "",
		commits: []
	};

  	componentDidMount() {
    	//this.onFetchFromGitHub();
  	}
  	constructor(props){
  		super(props);

  		let [item] = this.props.repositories.filter(node=>{
  			return node.node.id === this.props.match.params.name
  		});

  		this.state.name = item.node.name;
  		this.state.description = item.node.description;
  		this.state.commits = item.node.ref.target.history.edges;

  	}

	render(){
		const { name, description, commits } = this.state;
		console.log(this.state)
		return(
			<div>
				{description ? (
					<div>
						<RepoCard name={name} description={description} />
						<SearchFilter list={commits}/>
						
					</div>
				):(
					<p> Carregando </p>
				)}
		    </div>
	    );	
	}
}

const REPOSITORY = connect(mapStateToProps, null)(Repository);

export default withRouter(REPOSITORY);