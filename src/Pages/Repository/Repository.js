import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const axiosGitHubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: 'bearer b53f7480622f639e278f82e6bf83269843c9b658'
  }
});



class Repository extends Component {

	state = {
	    path: 'tsaldanha',
	    organization: null,
	    errors: null,
	    name: null,
	    repositories: null
  	};


  	componentDidMount() {
    	this.onFetchFromGitHub();
  	}

	onFetchFromGitHub = () => {
	const GET_ORGANIZATION = `
	  query{
	  repository(name:"${this.props.match.params.name
	}", owner:"tsaldanha"){
	    id,
	    name,
	    description
	    ref(qualifiedName: "master") {
	            target {
	              ... on Commit {
	                id
	                history(first: 20) {
	                  pageInfo {
	                    hasNextPage
	                  }
	                  edges {
	                    node {
	                      messageHeadline
	                    }
	                  }
	                }
	              }
	            }
	          }
	  }
	}


	`;

    axiosGitHubGraphQL
      .post('', { query: GET_ORGANIZATION })
      .then(result => {
      	console.log(result);
      	if (!result.data.data.errors){
      		this.setState(() => ({
          		name: result.data.data.repository.name,
          		description: result.data.data.repository.description,
          		commits: result.data.data.repository.ref.target.history.edges
          	}))	
      	}
      }
      );
  	}


	render(){
		const { name, description, commits } = this.state;
		return(
			<div>
				<div> {name} </div>
				<p> {description} </p>
			
				{commits ? (
		          <Commits list={this.state.commits}/>
		        	) : (
		         	 <p>No information yet ...</p>
		        	)
		        }
		    </div>
	    );	
	}
}
	const Commits = (props) => {

	  return (
	  <div>
	    <p>
	      <strong>Commits from this Repo:</strong>
	    </p>
	      {props.list.length > 0 ? ( 
	        <ul>
	          {props.list.map((commit, i)=>{
	            return (<li key={i}> {commit.node.messageHeadline}</li> );
	          })}
	        </ul>
	      ) : (
	        <p> Nenhum commit feito</p>
	      )}
	      
	    
	  </div>
	);
	}

export default withRouter(Repository);