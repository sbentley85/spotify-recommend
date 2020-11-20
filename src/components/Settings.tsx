import React from "react";
import ChoicesInput from "./ChoicesInput";
import ChoicesSlider from "./ChoicesSlider";
import { Grid } from "semantic-ui-react";

const Settings = (props: {
	searchType: string;
	selection: string;
	updateSelection: any;
	updateSearchType: any;
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
