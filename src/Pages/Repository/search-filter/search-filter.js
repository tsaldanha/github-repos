import React, { Component } from 'react';

class SearchFilter extends Component {

	constructor(props){
		super(props);
		this.state = {
			list : props.list,
		}
	}
	
	filterCommits(event){
		let filteredList = this.props.list.filter(
			(commit) => {
				return commit.node.messageHeadline.toLowerCase().includes(event.target.value.toLowerCase());
			}
		);
		this.setState({
			list: filteredList
		});
	}

	render(){
		
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

				
				{this.state.list ? (
		          	<ul>
						{this.state.list.map((commit, i)=>{
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