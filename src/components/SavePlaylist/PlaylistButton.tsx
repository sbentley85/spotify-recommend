import React from "react";
import AddButton from "./AddButton";
import SaveButton from "./SaveButton";

const PlaylistButton = (props: {
	newPlaylist: boolean;
	handleSave: () => void;
}) => {
	return (
		<>
			{props.newPlaylist ? (
				<SaveButton handleSave={props.handleSave} />
			) : (
				<AddButton handleSave={props.handleSave} />
			)}
		</>
	);
};

export default PlaylistButton;
