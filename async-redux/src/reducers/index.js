import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS } from "../actions";


const initialState = {
	displayComic:	{},
	maxComicNumber: 1,
	fetching: false,
	errorMsg: ''
}

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case (FETCH_START):
			// fetching true, clear comic data, no error
			return ({
				...state,
				fetching: true,
				displayComic: {},
				error: ''
			});
		case (FETCH_SUCCESS): 
			// save returned data to store, not fetching, no error
			return ({
				...state,
				displayComic: action.payload,
				maxComicNumber: action.payload.num,
				fetching: false,
				error: ''
			});
		case (FETCH_ERROR): 
			// payload will contain error message, not fetching, no comic data
			return ({
				...state,
				displayComic: {}, 
				fetching: false,
				error: action.payload
			})
		default:
			return state;
	}
}
