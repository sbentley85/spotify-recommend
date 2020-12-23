import React, { SyntheticEvent } from "react";
import choicesStyles from "./choices.module.css";
import SelectionMenu from "../Menu/SelectionMenu";

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
			icon: "user",
		},
		{
			key: "search",
			text: "Search",
			value: "search",
			icon: "search",
		},
	];

	const TrackOptions = [
		{
			key: "top-tracks",
			text: "My Top Tracks",
			value: "top-tracks",
			icon: "music",
		},
		{
			key: "my-playlists",
			text: "My Playlists",
			value: "my-playlists",
			icon: "list ol",
		},
		{
			key: "search",
			text: "Search",
			value: "search",
			icon: "search",
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
