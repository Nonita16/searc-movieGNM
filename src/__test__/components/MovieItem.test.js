import React from 'react';
import { mount, shallow } from "enzyme";
import MovieItemMock from '../../__mocks__/MovieItemMock';
import MovieItem from '../../components/MovieItem';
import ProviderMock from '../../__mocks__/ProviderMock';

describe('<MovieItem/>', () => {
    
    test('Render of movieItem component', () => {
        const movieItem = shallow(
            <ProviderMock>
                <MovieItem/>
            </ProviderMock>
        );
        expect(movieItem.length).toEqual(1);
    });
})