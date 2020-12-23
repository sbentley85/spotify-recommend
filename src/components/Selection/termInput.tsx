import React, { SyntheticEvent } from "react";
import { Dropdown } from "semantic-ui-react";
import selectionStyles from "./selection.module.css";
import { IDropdownCallback } from "../Choices/Choices";
import SelectionMenu from "../Menu/SelectionMenu";

const TermInput = (props: {
	updateTerm: (event: SyntheticEvent, value: string) => void;
	term: string;
}) => {
	const termOptions = [
		{
			key: "long",
			text: "All time",
			value: "long_term",
			icon: "calendar outline",
		},
		{
			key: "medium",
			text: "6 Months",
			value: "medium_term",
			icon: "calendar outline",
		},
		{
			key: "short",
			text: "4 Weeks",
			value: "short_term",
			icon: "calendar outline",
		},
	];

	return (
		<div className={selectionStyles.termInput}>
			<SelectionMenu
				options={termOptions}
				selection={props.term}
				handleClick={props.updateTerm}
			/>

			{/* <Dropdown
				onChange={props.updateTerm}
				placeholder="Select"
				selection
				value={props.term}
				options={termOptions}
			/> */}
		</div>
	);
};

export default TermInput;
