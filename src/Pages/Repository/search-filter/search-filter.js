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
					return commit.node.messageHeadline.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
				}
			);
		return (
			<div>
				<input type="text" id="filter" name="filter" 
					placeholder="Filtre os commits pelo termo desejado" 
					defaultValue="" 
					onChange={this.filterCommits.bind(this)}
				/>
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