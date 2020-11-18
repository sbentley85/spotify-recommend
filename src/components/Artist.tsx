import React from "react";

const Artist = (props: {
	artist: { name: string; id: string };
	addToPicks?: any;
}) => {
	return (
		<div onClick={(e) => props.addToPicks(e, props.artist)}>
			{props.artist.name}
		</div>
	);
};

export default Artist;
