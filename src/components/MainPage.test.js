import { shallow, mount, render } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;

//before each test this should run
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }

    wrapper = shallow(<MainPage {...mockProps} />)
})

it('expects to render MainPage component without crashing', () => {
    expect(wrapper).toMatchSnapshot();
})

it('filters the robots correctly', () => {

    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            username: 'JohnJacobs'
        }],
        searchField: 'John'
    }

    const wrapper = shallow(<MainPage {...mockProps2} />)
    expect(wrapper.instance().filteredRobots()).toEqual([{
        id: 3,
        name: 'John',
        username: "JohnJacobs",
        isPending: false
    }]);
})