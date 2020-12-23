import React from "react";
import { IDropdownCallback } from "../Choices/Choices";
import { Menu } from "semantic-ui-react";

const ChoicesMenu = (props: {
	searchType: string;
	selection: string;
	updateSelection: any;
}) => {
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
		<Menu inverted secondary>
			{props.searchType === "Artists"
				? ArtistOptions.map((option) => {
						return (
							<Menu.Item
								name={option.text}
								active={props.selection === option.value}
								onClick={(event) =>
									props.updateSelection(event, option.value)
								}
							/>
						);
				  })
				: TrackOptions.map((option) => {
						return (
							<Menu.Item
								name={option.text}
								active={props.selection === option.value}
								onClick={(event) =>
									props.updateSelection(event, option.value)
								}
							/>
						);
				  })}
		</Menu>
	);
};

export default ChoicesMenu;
