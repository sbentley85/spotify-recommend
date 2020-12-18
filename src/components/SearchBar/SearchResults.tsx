import React from "react";
import ArtistList from "../Artists/ArtistList";
import TrackList from "../Tracks/TrackList";
import { IPicks, IPickCallback } from "../Choices/Choices";

const SearchResults = (props: {
	tracks?: IPicks[] | null;
	artists?: IPicks[] | null;
	handlePicks: IPickCallback;
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
