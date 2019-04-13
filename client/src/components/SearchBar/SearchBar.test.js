import React from 'react';
import { shallow, configure } from 'enzyme';
import SearchBar from '../SearchBar/SearchBar';
import Adapter from 'enzyme-adapter-react-16';
import { Input } from './SearchBar';

configure({ adapter: new Adapter() });

const props = {
  handleSearch: () => ''
}

describe('App Component', () => {
  it('renders the SearchBar component', () => {
    const wrapper = shallow(
      <SearchBar {...props}/>
    );
    expect(wrapper.find(Input)).toHaveLength(1);
  });
});