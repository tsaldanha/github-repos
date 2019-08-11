import React from 'react';
import { mount, shallow } from 'enzyme';
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
  }
};

const missing_props = {
  user: {
    name: "Tadeu Saldanha",
    company: "@bikedeboa",
    email: "tadeusaldanha@gmail.com",
    location: "Brasil",
    url : "https://github.com/tsaldanha",
    websiteUrl: "https://bikedeboa.com.br"
  }
}

describe('Profile Rendering', ()=>{
  it('renders with all Props without crashing', () => {
    const wrapper = shallow(<Profile profile={props} />);
  });

  it('renders with missing Props without crashing', () => {
    const wrapper = shallow(<Profile profile={missing_props} />);
  });  

  it('To throw an Error', () => {
    expect(()=>{
      const wrapper = shallow(<Profile />);
    }).toThrow();
  });

  it('render with props ', () => {
    const wrapper = shallow(<Profile profile={props} />);
    expect(wrapper).toMatchSnapshot();
  });

  

});


