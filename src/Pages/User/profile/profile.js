import React, { Component } from 'react';

class Profile extends Component {

	constructor(props){
		super(props);
		this.state = {
			name: props.user.name,
			email: props.user.email,
			login: props.user.login ,
			bio: props.user.bio,
			avatarUrl: props.user.avatarUrl,
			websiteUrl: props.user.websiteUrl,
			company: props.user.company,
			url: props.user.url,
			location: props.user.location
		};
		
	}
	
	render(){
		const {name, email, login, bio, avatarUrl, websiteUrl, company, url, location} = this.state;
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

export default Profile;