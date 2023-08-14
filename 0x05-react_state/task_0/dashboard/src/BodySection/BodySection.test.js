import { shallow, mount } from 'enzyme';
import React from 'react';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<BodySection />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it(' renders BodySection without crashing', () => {
    const wrapper = shallow(<BodySection />);
    expect(wrapper.exists()).toEqual(true);
  });
});
