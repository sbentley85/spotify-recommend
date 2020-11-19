import React, { useEffect, useState } from "react";

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
