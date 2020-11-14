import React, {useState} from 'react';
import './App.css';
import Spotify from './util/spotify'
import SearchBar from './components/SearchBar'
import MyPlaylists from './components/MyPlaylists';
import MyRecommendations from './components/MyRecommendations'
import Picks from './components/Picks'
import TopTracks from './components/TopTracks'
import TopArtists from './components/TopArtists'


function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [recommendations, setRecommendations] = useState(null)

  const updateSearchTerm = (event: any) => {
    const term = event.target.value;
    setSearchTerm(term)
  }

  const onSearch = async () => {
    const tracks = await Spotify.search(searchTerm);
    setRecommendations(tracks);

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
