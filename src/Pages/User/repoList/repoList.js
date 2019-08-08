import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class RepoList extends Component {
	constructor(props){
		super(props);
		this.state = {
			list : props.list
		}
	}
	render(){
		let {list} = this.state;
		return(
			<div>
				{list.length > 0? (
				<ul>
					{list.map((repo)=>{
						return (<li key={repo.node.id}> <Link to={`/repos/${repo.node.name}`}>{repo.node.name}</Link>  </li> );
						 })}
				</ul>
				): (
					<p>Nenhum repositorio encontrado</p>
				)}
			</div>
		);
	}
}

export default RepoList