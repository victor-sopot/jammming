import logo from '../../logo.svg';
import './App.css';
import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchResults: [
      {name: 'What', artist: 'Ed Beeran', album: 'Jokes', id: 1}, 
      {name: 'Here Comes the SUn', artist: 'The Beatles', album: '21 I think', id: 2},
      {name: 'By the Way', artist: 'Red Hot Chili Peppers', album: 'By the Way', id: 3}
    ],
    playlistName: 'Adams playlist',
    playlistTracks: [
      {name: 'The What', artist: 'Biggie Smalls', album: 'Ready to Die', id: 5},
      {name: 'Greatest Hits', artist: 'Queen', album: 'Greatest Hits', id: 4},
      {name: 'Some other album', artist: 'Kidz', album: 'lols', id: 6}
    ]
    };
  }
  render () {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }

}

export default App;