import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
    const footer = shallow(<Footer/>);
    test('Render of component Footer', () => {
        expect(footer.length).toEqual(1);
    });
    test('Render title', () => {
        expect(footer.find(".Footer-title").text()).toEqual("Group Nine Media");
    })
})
