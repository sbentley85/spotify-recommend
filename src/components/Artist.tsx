import React from "react";
import { IPicks } from "./Choices";

const Artist = (props: { artist: IPicks; handlePicks?: any }) => {
	return (
		<div
			onClick={(e) => props.handlePicks(e, props.artist)}
			className="artist"
		>
			{props.artist.name}
		</div>
	);
};

export default Artist;
