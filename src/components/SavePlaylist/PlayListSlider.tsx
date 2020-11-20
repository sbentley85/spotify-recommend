import React from "react";
import { Checkbox } from "semantic-ui-react";

const PlayListSlider = (props: { updateNewPlaylist: any }) => {
	return (
		<div className="slider">
			<span className="sliderLabel">Add to existing</span>
			<Checkbox
				toggle
				id="new-playlist"
				name="new-playlist"
				onChange={props.updateNewPlaylist}
			/>
			<span className="sliderLabel">New Playlist</span>
		</div>
	);
};

export default PlayListSlider;
