import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Playlist from '../Playlist/Playlist';
import PlaylistItem from '../PlaylistItem/PlaylistItem';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App Component', () => {
  it('renders the Counter wrapper', () => {
    const playlist = [
      {
        id: '1',
        name: 'Teste',
        artists: [{ name: 'aaa' }],
        album: {
          images: [{}, { url: 'aaa' }],
        }
      },
      {
        id: '2',
        name: 'Teste',
        artists: [{ name: 'aaa' }],
        album: {
          images: [{}, { url: 'aaa' }],
        }
      }
    ];
    const wrapper = shallow(<Playlist playlist={playlist} />);
    expect(wrapper.find(PlaylistItem)).toHaveLength(2);
  });
});