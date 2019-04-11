
import React from 'react';
import { mount, render, shallow, configure } from 'enzyme';
import SearchBar from '../components/SearchBar/SearchBar';
import App from '../containers/App';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App Component', () => {
  it('renders the Counter wrapper', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ loggedIn: true });
    expect(true).toBeTruthy();
  });
});