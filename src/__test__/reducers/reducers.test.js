import reducer from '../../reducers';
import MovieItemMock from '../../__mocks__/MovieItemMock';

describe('Reducers', () => {
    test('Return movies state', () => {
        expect(reducer({}, '')).toEqual({})
    });
    test('GET_MOVIES', () => {
        const initialState = {
            movies:[]
        }
        const payload = MovieItemMock;
        const action = {
            type: 'GET_MOVIES',
            payload
        };
        const expected = {
            movies: [
                MovieItemMock
            ],				
            loading: false,
            error: ''
        };
        expect(reducer(initialState, action)).toEqual(expected);
    })
});