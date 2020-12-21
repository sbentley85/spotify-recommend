import React, { ChangeEvent } from "react";

const VolumeSlider = (props: {
	updateVolume: (event: ChangeEvent<HTMLInputElement>) => void;
	volume: number;
}) => {
	return (
		<input
			type="range"
			min={0}
			max={100}
			value={props.volume}
			onChange={props.updateVolume}
		/>
	);
};

export default VolumeSlider;
