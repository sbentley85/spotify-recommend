import React from "react";
import ChoicesInput from "../Choices/ChoicesInput";
import ChoicesSlider from "../Choices/ChoicesSlider";
import { ISliderCallback, IDropdownCallback } from "../Choices/Choices";
import { Grid } from "semantic-ui-react";

const Settings = (props: {
	searchType: string;
	selection: string;
	updateSelection: IDropdownCallback;
	updateSearchType: ISliderCallback;
}) => {
	return (
		<>
			<Grid.Column>
				<ChoicesInput
					searchType={props.searchType}
					selection={props.selection}
					updateSelection={props.updateSelection}
				/>
			</Grid.Column>
			<Grid.Column>
				<ChoicesSlider updateSearchType={props.updateSearchType} />
			</Grid.Column>
		</>
	);
};

export default Settings;
