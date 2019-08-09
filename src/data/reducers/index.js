import {SET_USER, SET_REPOSITORIES, SET_DATA} from "../actions/action-types";

const initialState = {
  user: {},
  repositories: {}

};
function rootReducer(state = initialState, action) {
  switch(action.type){
		case SET_USER :
			return Object.assign({}, state, {
      			user: action.payload
    		});
		case SET_REPOSITORIES : 
			return Object.assign({}, state, {
      			repositories: action.payload
    		});
    	case SET_DATA : 
    		return Object.assign({}, state, {
    			user: action.payload.user,
    			repositories: action.payload.repositories
    		});
    	default :
    		return state;
	}
};
export default rootReducer;