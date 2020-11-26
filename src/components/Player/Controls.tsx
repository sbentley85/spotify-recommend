import React from "react";
import { Icon } from "semantic-ui-react";

const Controls = (props: {
	previousTrack: any;
	togglePlay: any;
	nextTrack: any;
	playing: boolean;
}) => {
	return (
		<div id="controls">
			<Icon
				name="step backward"
				className="playerControl"
				onClick={props.previousTrack}
			/>
			{props.playing ? (
				<Icon
					name="pause"
					className="playerControl"
					onClick={props.togglePlay}
				/>
			) : (
				<Icon
					name="play"
					className="playerControl"
					onClick={props.togglePlay}
				/>
			)}

			<Icon
				name="step forward"
				className="playerControl"
				onClick={props.nextTrack}
			/>
		</div>
	);
};

export default Controls;
