import React from "react";
import { Dropdown } from "semantic-ui-react";
import selectionStyles from "./selection.module.css";
import { IDropdownCallback } from "../Choices/Choices";

const TermInput = (props: { updateTerm: IDropdownCallback; term: string }) => {
	const termOptions = [
		{
			key: "long",
			text: "All time",
			value: "long_term",
		},
		{
			key: "medium",
			text: "6 Months",
			value: "medium_term",
		},
		{
			key: "short",
			text: "4 Weeks",
			value: "short_term",
		},
	];

	return (
		<div className={selectionStyles.termInput}>
			<Dropdown
				onChange={props.updateTerm}
				placeholder="Select"
				selection
				value={props.term}
				options={termOptions}
			/>
		</div>
	);
};

export default TermInput;
