import {configure, shallow} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import NavigationList from './NavigationList';
import NavigationItem from '../NavigationItem/NavigationItem'

configure({adapter: new Adapter()})

describe('<NavigationList />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationList/>);
  })

  it('Should render 3 <navigationItem /> components if not authenticated', () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });

  it('Should render 4 <navigationItem /> components if authenticated', () => {
    wrapper.setProps({isAuthenticated: true})
    expect(wrapper.find(NavigationItem)).toHaveLength(4);
  });

  it('Should show logout <navigationItem />', () => {
    wrapper.setProps({isAuthenticated: true})
    expect(wrapper.contains(<NavigationItem link='/logout'>Logout</NavigationItem>)).toEqual(true);
  });

});