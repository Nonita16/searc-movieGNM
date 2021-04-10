import Instance from '../service';
import {GET_MOVIES, LOADING, ERROR} from '../types/index.js'


export const searchMovie = (strSearch) => async (dispatch) => {
    dispatch({
        type: LOADING
    });
    try {
        const response = await Instance.get(`/search/movie?api_key=d7a3a18bf1f75a32e20a4c21012ba47b&query=${strSearch}`);
        //const response = await Instance.get(`movie/550?api_key=d7a3a18bf1f75a32e20a4c21012ba47b`);
        console.log(response.data.results)
        console.log(strSearch)
        dispatch({
            type: GET_MOVIES,
            payload: response.data.results
        })
    }
    catch (error) {
        dispatch({
            type: ERROR,
            payload: "Something went wrong, try later"
        })
    }
}