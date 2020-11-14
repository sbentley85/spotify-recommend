import React from 'react';
import TrackList from '../TrackList'

const SearchResults = (props: {tracks: any}) => {

	return (
		<div id="search-results">
			Search Results
			<TrackList tracks={props.tracks}/>
		</div>
	);
};

export default SearchResults;