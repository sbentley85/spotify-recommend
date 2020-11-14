import React from 'react';
import TrackList from '../TrackList'

const SearchResults = (props: {tracks: any}) => {

	return (
		<div id="search-results">

			<TrackList tracks={props.tracks}/>
		</div>
	);
};

export default SearchResults;