import React from "react";
import TrackList from "./TrackList";
import { IPicks } from "./Choices";
import SavePlaylist from "./SavePlaylist/SavePlaylist";
import SpotifyPlayer from "./Player/SpotifyPlayer";

const MyRecommendations = (props: { tracks: IPicks[]; picks: IPicks[] }) => {
	return (
		<div id="my-recommendations">
			<SpotifyPlayer tracks={props.tracks} />
			<TrackList tracks={props.tracks} />
			<SavePlaylist picks={props.picks} tracks={props.tracks} />
		</div>
	);
};

export default MyRecommendations;
