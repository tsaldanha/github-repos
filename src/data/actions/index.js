import {SET_USER, SET_REPOSITORIES, SET_DATA} from "./action-types";

export function setUser(payload){
	return { type: SET_USER, payload}
};

export function setRepositories(payload){
	return { type: SET_REPOSITORIES, payload}
};

export function setData(payload){
	return { type: SET_DATA, payload}
};
