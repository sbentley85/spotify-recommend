import React from "react";
import { IPicks } from "./Choices";

const Track = (props: { track: IPicks; handlePicks: any }) => {
	return (
		<div
			onClick={(e) => props.handlePicks(e, props.track)}
			className="track"
		>
			<div
				className="trackImage"
				style={
					props.track.smImg
						? { backgroundImage: `url(${props.track.smImg.url})` }
						: { backgroundColor: "black" }
				}
			></div>
			<div className="trackDetails">
				{props.track.artist + " - " + props.track.name}
			</div>
		</div>
	);
};

export default Track;
