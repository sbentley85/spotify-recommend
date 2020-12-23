import React, { useEffect, useState } from "react";
import { IPicks } from "../Choices/Choices";
import TrackList from "./TrackList";
import SpotifyUtils from "../../util/spotify";

const Recenttracks = (props: { handlePicks: any }) => {
	const [recentTracks, setRecentTracks] = useState<IPicks[]>([]);

	useEffect(() => {
		const getRecentTracks = async () => {
			const tracks: IPicks[] = await SpotifyUtils.getRecentTracks();
			setRecentTracks(tracks);
		};

		getRecentTracks();
	}, []);

	return (
		<div id="my-recent-tracks">
			<TrackList handleClick={props.handlePicks} tracks={recentTracks} />
		</div>
	);
};

export default Recenttracks;
