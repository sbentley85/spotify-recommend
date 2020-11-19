import React from "react";

const Track = (props: {
	track: {
		id: string;
		name: string;
		artist: string;
	};
	handlePicks: any;
}) => {
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
