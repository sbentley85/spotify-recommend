import React from "react";

import TrackList from "./TrackList";
import ArtistList from "./ArtistList";

const Picks = (props: { picks: any; searchType: string; handlePicks: any }) => {
	return (
		<>
			{props.searchType === "Artists" ? (
				<ArtistList
					handlePicks={props.handlePicks}
					artists={props.picks}
				/>
			) : (
				<></>
			)}
			{props.searchType === "Tracks" ? (
				<TrackList
					handlePicks={props.handlePicks}
					tracks={props.picks}
				/>
			) : (
				<></>
			)}
		</>
	);
};

export default Picks;
