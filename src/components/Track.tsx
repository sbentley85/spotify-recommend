import React from "react";
import { IPicks } from "./Choices";

const Track = (props: { track: IPicks; handlePicks: any }) => {
	return (
		<div
			onClick={(e) => props.handlePicks(e, props.track)}
			className="track"
		>
			{/* <img src={props.track.smImg.url} /> */}
			{props.track.artist + " - " + props.track.name}
		</div>
	);
};

export default Track;
