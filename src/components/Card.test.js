import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from './Card';

it('expects to render card component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
})