import React from 'react';
import { shallow, configure } from 'enzyme';
import PlaylistItem from '../PlaylistItem/PlaylistItem';
import Adapter from 'enzyme-adapter-react-16';
import { AlbumImageWrapper } from './PlaylistItem';

configure({ adapter: new Adapter() });

const props = {
  id: '1',
  albumImg: 'Teste',
  artist: 'SOAD',
  title: 'Toxicity'
}

describe('App Component', () => {
  it('renders the PlaylistItem component', () => {
    const wrapper = shallow(
      <PlaylistItem {...props}/>
    );
    expect(wrapper.find(AlbumImageWrapper)).toHaveLength(1);
  });
});