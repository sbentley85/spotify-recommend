import React from "react";
import ArtistList from "../ArtistList";
import TrackList from "../TrackList";

const SearchResults = (props: {
	tracks?: any;
	artists?: any;
	handlePicks: any;
}) => {
	return (
		<div id="search-results">
			{props.tracks ? (
				<TrackList
					handleClick={props.handlePicks}
					tracks={props.tracks}
				/>
			) : null}
			{props.artists ? (
				<ArtistList
					handleClick={props.handlePicks}
					artists={props.artists}
				/>
			) : null}
		</div>
	);
};

export default SearchResults;
