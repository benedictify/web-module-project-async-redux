import { FETCH_START } from "../actions";


const initialState = {
	displayComic:	{},
	maxComicNumber: 1
}

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case (FETCH_START):
			return ({
				...state
			});
		
		default:
			return state;
	}
}
