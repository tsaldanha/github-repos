import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class RepoList extends Component {

	render(){
		try {
			let list = this.props.list;
			return(
				<div>
					<h2 className="title is-4"> List of Repositories </h2>
					{list.length > 0? (
					<ul>
						{list.map((repo)=>{
							return (<li key={repo.node.id}> <Link to={`/repos/${repo.node.id}`}>{repo.node.name}</Link>  </li> );
							 })}
					</ul>
					): (
						<p>Nenhum repositorio encontrado</p>
					)}
				</div>
			);
		} catch (e){
			return(
				<p> Aconteceu algum erro </p>
			);
		}
		
	}
}

export default RepoList