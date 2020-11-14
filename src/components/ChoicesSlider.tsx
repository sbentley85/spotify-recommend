import React from "react";
import { Checkbox } from "semantic-ui-react";

const ChoicesSlider = (props: any) => {
	return (
		<div>
			<span>Artists</span>
			<Checkbox
				toggle
				id="type"
				name="search-type"
				onChange={props.updateSearchType}
			/>
			<span>Tracks</span>
		</div>
	);
};

export default ChoicesSlider;
