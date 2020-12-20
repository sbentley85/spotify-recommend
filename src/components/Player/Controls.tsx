import React from "react";
import { Icon } from "semantic-ui-react";
import playerStyles from "./player.module.css";
import VolumeSlider from "./VolumeSlider";

const Controls = (props: {
	previousTrack: any;
	togglePlay: any;
	nextTrack: any;
	playing: boolean;
	updateVolume: any;
	volume: number;
}) => {
	return (
		<div className={playerStyles.controlsContainer}>
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
			<VolumeSlider
				updateVolume={props.updateVolume}
				volume={props.volume}
			/>
		</div>
	);
};

export default Controls;
