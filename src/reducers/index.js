import {GET_MOVIES, LOADING, ERROR} from '../types/index.js'

const INITIAL_STATE = {
    movies: [],
	loading: false,
	error: '',
};

export default function reducer(state = INITIAL_STATE, action){
	switch (action.type) {
		case GET_MOVIES:
			return {
				...state,
				movies: action.payload,
				loading: false,
				error: ''
			};

		case LOADING:
			return { ...state, loading: true };

		case ERROR:
			return { ...state, error: action.payload, loading: false };

		default: return state;
	};
};