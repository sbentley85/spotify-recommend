import React from "react";
import { Input } from "semantic-ui-react";
import { IInputChangeCallback } from "../SavePlaylist/SavePlaylist";

const SearchInput = (props: {
	updateSearchTerm: IInputChangeCallback;
	onSearch: () => void;
}) => (
	<Input
		icon={{ name: "search" }}
		placeholder="Search..."
		onChange={props.updateSearchTerm}
		id="input"
		type="text"
	/>
);

export default SearchInput;
