import React from "react";
import { Checkbox } from "semantic-ui-react";
import choicesStyles from "../Choices/choices.module.css";
import { ISliderCallback } from "../Choices/Choices";

const PlayListSlider = (props: { updateNewPlaylist: ISliderCallback }) => {
	return (
		<div className={choicesStyles.slider}>
			<span className={choicesStyles.sliderLabel}>Add to existing</span>
			<Checkbox
				toggle
				id="new-playlist"
				name="new-playlist"
				onChange={props.updateNewPlaylist}
			/>
			<span className={choicesStyles.sliderLabel}>New Playlist</span>
		</div>
	);
};

export default PlayListSlider;
