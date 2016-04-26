import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Hello from './Hello';

describe('Hello', () => {

    it('renders an <h1> containing Hello World', () => {
        const wrapper = shallow(<Hello />);
        expect(wrapper).to.have.html('<h1>Hello World</h1>');
    });
});
