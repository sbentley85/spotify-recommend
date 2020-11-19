import React from "react";

const Artist = (props: {
	artist: { name: string; id: string };
	handlePicks?: any;
}) => {
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
