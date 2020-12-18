import React from "react";
import TrackList from "../Tracks/TrackList";
import ArtistList from "../Artists/ArtistList";
import { IPicks, IPickCallback } from "./Choices";

const Picks = (props: {
	picks: IPicks[];
	searchType: string;
	handlePicks: IPickCallback;
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
