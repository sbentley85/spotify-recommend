import React from "react";
import { Checkbox } from "semantic-ui-react";

const ChoicesSlider = (props: any) => {
	return (
		<div className="slider">
			<span className="sliderLabel">Artists</span>
			<Checkbox
				toggle
				id="type"
				name="search-type"
				onChange={props.updateSearchType}
			/>
			<span className="sliderLabel">Tracks</span>
		</div>
	);
};

export default ChoicesSlider;
