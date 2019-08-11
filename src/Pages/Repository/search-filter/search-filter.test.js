import React from 'react';
import { mount, shallow } from 'enzyme';
import SearchFilter from './search-filter';
import { Link } from 'react-router-dom';


describe('Testing', ()=>{

	let wrapper ;
	const commits = [{
		node:{
			messageHeadline : "teste do Tadeu"
		},
		node:{
			messageHeadline : "Tadeu"	
		}
	}];
	const onSearchMock = jest.fn();

	beforeAll(()=>{
		
    	wrapper = shallow(<SearchFilter list={commits}/>);
  	});	

	it('it should return just the message with Tadeu', ()=>{
		const expectedResult = [{
			node:{
				messageHeadline : 'Tadeu'	
			}
		}];
		const event = {
	    	preventDefault() {},
	    	target: { value: 'tadeu' }
    	};
    	const instance = wrapper.instance();
    	instance.filterCommits(event);
    	expect(wrapper.state('list')).toMatchObject(expectedResult);

  	});		

});