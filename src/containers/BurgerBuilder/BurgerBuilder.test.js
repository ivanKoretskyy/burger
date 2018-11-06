import {BurgerBuilder} from './BurgerBuilder';

import {configure, shallow} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import BuildControls from '../../components/BuildControls/BuildControls';

configure({adapter: new Adapter()});

describe('<BurgerBuilder />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder />);
  })
  
  it('should render <BuildControls>', () => {
    wrapper.setProps({ingridients:{salad:0}});
    expect(wrapper.find(BuildControls)).toHaveLength(1)
  })

})