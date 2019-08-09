import React, { Component } from 'react';

class Commits extends Component {

	constructor(props){
		super(props);
		this.state = {
			list : props.list
		}
	}
	
	render(){
		const {list} = this.state;
		return (
			<ul>
				{list.map((commit, i)=>{
	            	return (<li key={i}> {commit.node.messageHeadline}</li> );
	          	})}
			</ul>
		);
	}

}

export default Commits;