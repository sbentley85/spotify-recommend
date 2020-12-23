import React, { SyntheticEvent } from "react";
import ChoicesInput from "../Choices/ChoicesInput";
import ChoicesSlider from "../Choices/ChoicesSlider";
import ChoicesMenu from "../Choices/ChoicesMenu";
import { ISliderCallback, IDropdownCallback } from "../Choices/Choices";
import { Grid } from "semantic-ui-react";

const Settings = (props: {
	searchType: string;
	selection: string;
	updateSelection: (event: SyntheticEvent, value: string) => void;
	updateSearchType: ISliderCallback;
}) => {
	return (
		<Grid.Row columns={2}>
			<Grid.Column>
				<ChoicesSlider updateSearchType={props.updateSearchType} />
			</Grid.Column>
			<Grid.Column>
				{/* <ChoicesInput
					searchType={props.searchType}
					selection={props.selection}
					updateSelection={props.updateSelection}
				/> */}
				<ChoicesMenu
					searchType={props.searchType}
					selection={props.selection}
					updateSelection={props.updateSelection}
				/>
			</Grid.Column>
		</Grid.Row>
	);
};

export default Settings;
