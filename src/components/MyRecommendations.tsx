import React from "react";
import TrackList from "./TrackList";
import { IPicks } from "./Choices";
import SavePlaylist from "./SavePlaylist/SavePlaylist";

const MyRecommendations = (props: { tracks: IPicks[] }) => {
	return (
		<div id="my-recommendations">
			<TrackList tracks={props.tracks} />
			<SavePlaylist tracks={props.tracks} />
		</div>
	);
};

export default MyRecommendations;
