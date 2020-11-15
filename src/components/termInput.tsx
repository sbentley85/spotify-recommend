import React from "react";
import { Dropdown } from "semantic-ui-react";

const TermInput = (props: any) => {
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
		<div>
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
