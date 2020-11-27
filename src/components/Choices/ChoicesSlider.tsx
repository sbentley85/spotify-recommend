import React from "react";
import { Checkbox } from "semantic-ui-react";
import choicesStyles from "./choices.module.css";

const ChoicesSlider = (props: any) => {
	return (
		<div className={choicesStyles.slider}>
			<span className={choicesStyles.sliderLabel}>Artists</span>
			<Checkbox
				toggle
				id="type"
				name="search-type"
				onChange={props.updateSearchType}
			/>
			<span className={choicesStyles.sliderLabel}>Tracks</span>
		</div>
	);
};

export default ChoicesSlider;
