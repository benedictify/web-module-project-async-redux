import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const getData = () => {
	return null;
}

export const fetchStart = () => {
	return ({type: FETCH_START});
}

export const fetchSuccess = (data) => {
	return ({type: FETCH_SUCCESS, payload: data});
}

export const fetchFail = (error) => {
	return ({type: FETCH_ERROR, payload: error});
}
