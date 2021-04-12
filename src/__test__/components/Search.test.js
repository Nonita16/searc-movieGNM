import React from 'react';
import { mount, shallow } from "enzyme";
import ProviderMock from '../../__mocks__/ProviderMock';
import Search from '../../components/Search';

describe('<Search/>', () => {
    const search = shallow(<Search/>);
    test('Render of search component', () => {
        expect(search.length).toEqual(1);
    });
    // test('test onChange', () => {
    //     const handleSearch = jest.fn();
    //     const wrapper = shallow(
    //         <ProviderMock>
    //             <Search handleSearch={handleSearch}/>
    //         </ProviderMock>
    //     );
    //     wrapper.find('input').simulate('change' );
    //     expect(handleSearch).toHaveBeenCalledTimes(1);
    // })
})