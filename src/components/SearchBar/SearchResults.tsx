import React from "react";
import ArtistList from "../ArtistList";
import TrackList from "../TrackList";

const SearchResults = (props: {
	tracks?: any;
	artists?: any;
	addToPicks: any;
}) => {
	return (
		<div id="search-results">
			{props.tracks ? (
				<TrackList
					addToPicks={props.addToPicks}
					tracks={props.tracks}
				/>
			) : null}
			{props.artists ? (
				<ArtistList
					addToPicks={props.addToPicks}
					artists={props.artists}
				/>
			) : null}
		</div>
	);
};

export default SearchResults;
