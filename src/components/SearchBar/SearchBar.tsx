import React, { useState } from 'react';
import SearchButton from './SearchButton'
import SearchInput from './SearchInput'
import Spotify from '../../util/spotify'
import SearchResults from './SearchResults'


const SearchBar = (props: any) => {
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

    return (
        <div id="searchbar">

            <SearchInput onChange={updateSearchTerm}/>
            <SearchButton onSearch={onSearch}/>
            {searchTracks ? <SearchResults tracks={searchTracks}/> : <></>}
        </div>
    );
};

export default SearchBar;