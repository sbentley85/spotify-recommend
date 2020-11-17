import React from "react";

const Track = (props: {
	track: { id: string; name: string; artist: string };
	addToPicks: any;
}) => {
	return (
		<div onClick={(e) => props.addToPicks(e, props.track.id)}>
			{props.track.artist + " - " + props.track.name}
		</div>
	);
};

export default Track;
