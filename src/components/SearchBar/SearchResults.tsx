import React from "react";
import ArtistList from "../ArtistList";
import TrackList from "../TrackList";

const SearchResults = (props: { tracks?: any; artists?: any }) => {
	return (
		<div id="search-results">
			{props.tracks ? <TrackList tracks={props.tracks} /> : null}
			{props.artists ? <ArtistList artists={props.artists} /> : null}
		</div>
	);
};

export default SearchResults;
