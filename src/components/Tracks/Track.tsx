import React from "react";
import { IPicks } from "../Choices/Choices";
import trackStyles from "./tracks.module.css";

const Track = (props: { track: IPicks; handleClick: any }) => {
	return (
		<div
			onClick={(e) => props.handleClick(e, props.track)}
			className={trackStyles.track}
		>
			<div
				className={trackStyles.trackImage}
				style={
					props.track.smImg
						? { backgroundImage: `url(${props.track.smImg.url})` }
						: { backgroundColor: "black" }
				}
			></div>
			<div className={trackStyles.trackDetails}>
				{props.track.artist + " - " + props.track.name}
			</div>
		</div>
	);
};

export default Track;
