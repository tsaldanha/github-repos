import React from 'react';
import { mount, shallow } from 'enzyme';
import RepoList from './repoList';
import { Link } from 'react-router-dom';

const props = {
  list: [{
    node:{
      id: "abcde",
      name: "Teste 1"
    },
    node:{
      id: "qawsed",
      name: "Teste 2"
    },
  }]
};

const missing_props = {
  list: []
};


describe('Repository List Rendering', ()=>{
  let wrapper;

  beforeAll(()=>{
    wrapper = mount(<RepoList profile={props} />);
  });

  
  it('render with props ', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

it('renders with missing Props without crashing', () => {
    const wrapper = shallow(<RepoList profile={missing_props} />);
 }); 

it('To NOT throw an Error', () => {
    expect(()=>{
      const wrapper = shallow(<RepoList />);
    }).not.toThrow();
  });
