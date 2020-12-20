import React, { useState } from "react";

const VolumeSlider = (props: { updateVolume: () => void; volume: number }) => {
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
