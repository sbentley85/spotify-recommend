import React from "react";
import { Dropdown } from "semantic-ui-react";

const ChoicesInput = (props: any) => {
	const ArtistOptions = [
		{
			key: "top-artists",
			text: "My Top Artists",
			value: "top-artists",
		},
		{
			key: "search",
			text: "Search",
			value: "search",
		},
	];

	const TrackOptions = [
		{
			key: "top-tracks",
			text: "My Top Tracks",
			value: "top-tracks",
		},
		{
			key: "my-playlists",
			text: "My Playlists",
			value: "my-playlists",
		},
		{
			key: "search",
			text: "Search",
			value: "search",
		},
	];
	return (
		<div>
			<Dropdown
				onChange={props.updateSelection}
				placeholder="Select"
				selection
				value={props.selection}
				options={
					props.searchType === "Artists"
						? ArtistOptions
						: TrackOptions
				}
			/>
		</div>
	);
};

export default ChoicesInput;
