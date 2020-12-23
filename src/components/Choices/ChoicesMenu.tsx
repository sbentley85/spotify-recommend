import React, { SyntheticEvent } from "react";
import choicesStyles from "./choices.module.css";
import SelectionMenu from "../Menu/SelectionMenu";
import { Menu } from "semantic-ui-react";

const ChoicesMenu = (props: {
	searchType: string;
	selection: string;
	updateSelection: (event: SyntheticEvent, value: string) => void;
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
		<div className={choicesStyles.menuContainer}>
			<SelectionMenu
				options={
					props.searchType === "Artists"
						? ArtistOptions
						: TrackOptions
				}
				selection={props.selection}
				handleClick={props.updateSelection}
			/>
		</div>
	);
};

export default ChoicesMenu;
