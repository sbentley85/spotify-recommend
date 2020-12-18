import React from "react";
import { IPicks, IPickCallback } from "../Choices/Choices";
import artistStyles from "../Tracks/tracks.module.css";

const Artist = (props: { artist: IPicks; handleClick: IPickCallback }) => {
	return (
		<div
			onClick={(e) => props.handleClick(e, props.artist)}
			className={artistStyles.artist}
		>
			<div
				className={artistStyles.artistImage}
				style={
					props.artist.smImg
						? { backgroundImage: `url(${props.artist.smImg.url})` }
						: { backgroundColor: "black" }
				}
			></div>
			<div className={artistStyles.artistName}>{props.artist.name}</div>
		</div>
	);
};

export default Artist;
