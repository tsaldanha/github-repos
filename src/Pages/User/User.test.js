import React from 'react';
import { mount, shallow, dive } from 'enzyme';
import User from './User';
import Profile from './profile';

const props = {
  user: {
  	name: "Tadeu Saldanha",
  	bio: "Front-end",
  	company: "@bikedeboa",
  	email: "tadeusaldanha@gmail.com",
  	location: "Brasil",
  	login: "tsaldanha",
  	name: "Tadeu Saldanha",
  	url : "https://github.com/tsaldanha",
  	websiteUrl: "https://bikedeboa.com.br"
  },
  repositories: []
};


describe('Testing', ()=>{
	
	let wrapper;

	beforeAll(()=>{
	 	wrapper = mount(<User.WrappedComponent {...props}/>);
	});

	it('should render', ()=>{
		expect(wrapper).toEqual(expect.anything());
	})

});