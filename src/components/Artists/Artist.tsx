import React from "react";
import { IPicks } from "../Choices/Choices";

const Artist = (props: { artist: IPicks; handleClick?: any }) => {
	return (
		<div
			onClick={(e) => props.handleClick(e, props.artist)}
			className="artist"
		>
			<div
				className="artistImage"
				style={
					props.artist.smImg
						? { backgroundImage: `url(${props.artist.smImg.url})` }
						: { backgroundColor: "black" }
				}
			></div>
			<div className="artistName">{props.artist.name}</div>
		</div>
	);
};

export default Artist;