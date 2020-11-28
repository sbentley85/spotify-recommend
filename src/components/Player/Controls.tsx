import React from "react";
import { Icon } from "semantic-ui-react";
import playerStyles from "./player.module.css";

const Controls = (props: {
	previousTrack: any;
	togglePlay: any;
	nextTrack: any;
	playing: boolean;
}) => {
	return (
		<div className={playerStyles.controls}>
			<Icon
				name="step backward"
				className={playerStyles.playerControl}
				onClick={props.previousTrack}
			/>
			{props.playing ? (
				<Icon
					name="pause"
					className={playerStyles.playerControl}
					onClick={props.togglePlay}
				/>
			) : (
				<Icon
					name="play"
					className={playerStyles.playerControl}
					onClick={props.togglePlay}
				/>
			)}

			<Icon
				name="step forward"
				className={playerStyles.playerControl}
				onClick={props.nextTrack}
			/>
		</div>
	);
};

export default Controls;
