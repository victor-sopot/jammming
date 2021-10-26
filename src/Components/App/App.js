import logo from '../../logo.svg';
import './App.css';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchResults: [
      {name: 'What', artist: 'Ed Beeran', album: 'Jokes', id: 1}, 
      {name: 'Here Comes the Sun', artist: 'The Beatles', album: '21 I think', id: 2},
      {name: 'By the Way', artist: 'Red Hot Chili Peppers', album: 'By the Way', id: 3}
    ],
    playlistName: 'Adams playlist',
    playlistTracks: [
      {name: 'Playlist The What', artist: 'Playlist Biggie Smalls', album: 'Playlist Ready to Die', id: 4},
      {name: 'Playlist Greatest Hits', artist: 'Playlist Queen', album: 'Playlist Greatest Hits', id: 5},
      {name: 'Playlist Some other album', artist: 'Playlist Kidz', album: 'Playlist lols', id: 6}
    ]
    };

    this.addTrack = this.addTrack.bind(this);
  }

  addTrack (savedTrack) {
    this.state.playlistTracks.find(savedTrack => savedTrack.id === this.state.playlistTracks.id) ? console.log('exist') : this.setState({ name: savedTrack.name, artist: savedTrack.artist, album: savedTrack.album, id: savedTrack.id });
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