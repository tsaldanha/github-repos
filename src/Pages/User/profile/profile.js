import React, { Component } from 'react';
import store from "../../../data";
import { setUser } from "../../../data/actions"; 

import { connect } from "react-redux";


class Profile extends Component {

	constructor(props){
		super(props);
	}
	
	render(){
		const {name, email, login, bio, avatarUrl, websiteUrl, company, url, location} = this.props.profile;
		return (
			<div>
				<p>{name}</p>
				<img src={avatarUrl} width="50"/>
				<p>{bio}</p>
				<p><a href={`mailto:${email}`}> {email} </a></p>
				<p><a href={websiteUrl}>{websiteUrl}</a></p>
				<p>{location}</p>
				<p>{login}</p>
				<p>{company}</p>
			</div>
		);
	}

}

export default Profile