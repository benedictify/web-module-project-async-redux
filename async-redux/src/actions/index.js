import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const getCurrentComic = () => {
	// axios call to get data from server
	// get data of current comic
	return (dispatch) => {
		dispatch(fetchStart());

		axios.get('https://xkcd.com/info.0.json')
			.then(response => {
				dispatch(fetchSuccess(response.data))
				console.log(response)
			})
			.catch(error => {
				dispatch(fetchFail(error))
			});
	}
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
