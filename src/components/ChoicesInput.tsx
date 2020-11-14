import React from "react";
import { Dropdown } from "semantic-ui-react";

const ChoicesInput = (props: any) => {
	const searchOptions = [
		{
			key: "Tracks",
			text: "My Top Tracks",
			value: "Tracks",
		},
		{
			key: "Artists",
			text: "My Top Artists",
			value: "Artists",
		},
		{
			key: "Playlists",
			text: "My Playlists",
			value: "Playlists",
		},
		{
			key: "Search",
			text: "Search",
			value: "Search",
		},
	];
	return (
		<Dropdown
			onChange={props.updateSelection}
			placeholder="Select"
			selection
			value={props.selection}
			options={searchOptions}
		/>
	);
};

export default ChoicesInput;
