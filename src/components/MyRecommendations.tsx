import React from "react";
import TrackList from "./TrackList";

const MyRecommendations = (props: { tracks: any }) => {
	return (
		<div id="my-recommendations">
			<TrackList tracks={props.tracks} />
		</div>
	);
};

export default MyRecommendations;
