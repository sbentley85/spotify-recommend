import React from "react";
import IPicks from "./Choices";
import TrackList from "./TrackList";
import ArtistList from "./ArtistList";

const Picks = (props: { picks: any; searchType: string }) => {
	return (
		<>
			{props.searchType === "Artists" ? (
				<ArtistList artists={props.picks} />
			) : (
				<></>
			)}
			{props.searchType === "Tracks" ? (
				<TrackList tracks={props.picks} />
			) : (
				<></>
			)}
		</>
	);
};

export default Picks;
