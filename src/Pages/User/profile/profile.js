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
			<div className="box">
				<article className="media">
					<figure className="media-left">
						<img src={avatarUrl} width="120"/>
					</figure>
					<div className="media-content">
						<h2><b className="title">{name}</b> | {login}</h2> 
						<p>{bio}</p>
						<p><a href={`mailto:${email}`}> {email} </a></p>
						<p>{location} | {company} | <a href={websiteUrl}>{websiteUrl}</a></p>
					</div>				
				</article>
			</div>
		);
	}

}

export default Profile