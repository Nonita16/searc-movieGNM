import actions from '../../actions';
import MovieItemMock from '../../__mocks__/MovieItemMock';

describe('Actions', () => {
    beforeEach(() => {
        fetch.resetMock();
    })
    test('Search Movie', async () => {
        fetch.mockResponseOnce((JSON.stringify({data: 'aaaa'})));
        actions.searchMovie('a war')()
         .then((response) => {
            expect(response.data.results).toEqual(MovieItemMock)
         })
    })
        // const payload = MovieItemMock;
        // const expected = {
        //     type: 'GET_MOVIES',
        //     payload
        // };
        // await expect(actions.searchMovie("str")).resolves.toBe(expected);
});