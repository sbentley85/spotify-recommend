import React from "react";
import TrackList from "./TrackList";
import { IPicks } from "./Choices";

const MyRecommendations = (props: { tracks: IPicks[] }) => {
	return (
		<div id="my-recommendations">
			<TrackList tracks={props.tracks} />
		</div>
	);
};

export default MyRecommendations;
