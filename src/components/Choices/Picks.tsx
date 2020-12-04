import React from "react";
import TrackList from "../Tracks/TrackList";
import ArtistList from "../Artists/ArtistList";
import { IPicks } from "./Choices";

const Picks = (props: {
	picks: IPicks[];
	searchType: string;
	handlePicks: any;
}) => {
	return (
		<>
			{props.searchType === "Artists" ? (
				<ArtistList
					handleClick={props.handlePicks}
					artists={props.picks}
				/>
			) : (
				<></>
			)}
			{props.searchType === "Tracks" ? (
				<TrackList
					handleClick={props.handlePicks}
					tracks={props.picks}
				/>
			) : (
				<></>
			)}
		</>
	);
};

export default Picks;