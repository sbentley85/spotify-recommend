import React, {useState} from 'react';
import './App.css';
import Spotify from './util/spotify'
import SearchBar from './components/SearchBar/SearchBar'
import MyPlaylists from './components/MyPlaylists';
import MyRecommendations from './components/MyRecommendations'
import Picks from './components/Picks'
import TopTracks from './components/TopTracks'
import TopArtists from './components/TopArtists'
import 'semantic-ui-css/semantic.min.css'
import SearchResults from './components/SearchBar/SearchResults'


function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchTracks, setSearchTracks] = useState(null)

  const updateSearchTerm = (event: any) => {
    const term = event.target.value;
    setSearchTerm(term)
  }

  const onSearch = async () => {
    const tracks = await Spotify.search(searchTerm);
    setSearchTracks(tracks);

  }

  const searchBarProps = {
    onSearch: onSearch,
    updateSearchTerm: updateSearchTerm
  }

  return (
    <div className="App">
      <h1>Spotify Recommend</h1>
        <SearchBar {...searchBarProps}/>

      <div className="content">
        {searchTracks ? <SearchResults tracks={searchTracks}/> : <></>}
        <MyPlaylists />
        <TopTracks />
        <TopArtists />
        <Picks />
        <MyRecommendations />
      </div>
      
    </div>
  );
}

export default App;
