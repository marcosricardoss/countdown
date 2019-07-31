import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Countdown from './Countdown';
import Sidebar from './Sidebar';

describe('App', () => {
  describe('Rendering', () => {    

    it('should have a App component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper)
    });

    it('should have a Countdown component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Countdown).length).toBe(1);
    });

    it('should have a Sidebar componentn', () => {
      const wrapper = shallow(<Sidebar />);
      expect(wrapper.find(Sidebar).length).toBe(0);
    });

  }); 
});    