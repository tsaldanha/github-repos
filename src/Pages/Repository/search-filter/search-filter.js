import React, { Component } from 'react';
import Commits from '../commits';

class SearchFilter extends Component {

	constructor(props){
		super(props);
		this.state = {
			list : props.list,
			search : "",
		}
	}
	
	filterCommits(event){
		this.setState({
			search: event.target.value,
		});
	}

	render(){
		let commits = this.state.list.filter(
				(commit) => {
					return commit.node.messageHeadline.toLowerCase().includes(this.state.search.toLowerCase());
				}
			);
		return (
			<div>
				<h3 className="title is-6">List of Commits</h3>
				<div className="field">
				  <div className="control">
				    <input className="input is-small" type="text" id="filter" name="filter" 
					placeholder="Filtre os commits pelo termo desejado" 
					defaultValue="" 
					onChange={this.filterCommits.bind(this)} />
				  </div>
				</div>

				
				{commits ? (
		          	<ul>
						{commits.map((commit, i)=>{
			            	return (<li key={i}> {commit.node.messageHeadline}</li> );
			          	})}
					</ul>
		        	) : (
		         	 <p>No information yet ...</p>
		        	)
		        }
			</div>
		);
	}

}

export default SearchFilter;