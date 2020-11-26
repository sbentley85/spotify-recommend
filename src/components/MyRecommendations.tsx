import React, { useState } from "react";
import TrackList from "./TrackList";
import { IPicks } from "./Choices";
import SavePlaylist from "./SavePlaylist/SavePlaylist";
import SpotifyPlayer from "./Player/SpotifyPlayer";

const MyRecommendations = (props: { tracks: IPicks[]; picks: IPicks[] }) => {
	const [selectedTrack, setSelectedTrack] = useState<IPicks>();
	const trackClick = (event: any, track: IPicks) => {
		setSelectedTrack(track);
	};
	return (
		<div id="my-recommendations">
			<SpotifyPlayer
				selectedTrack={selectedTrack}
				tracks={props.tracks}
			/>
			<TrackList tracks={props.tracks} handleClick={trackClick} />
			<SavePlaylist picks={props.picks} tracks={props.tracks} />
		</div>
	);
};

export default MyRecommendations;
