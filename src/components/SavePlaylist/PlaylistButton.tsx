import React from "react";
import AddButton from "./AddButton";
import SaveButton from "./SaveButton";

const PlaylistButton = (props: { newPlaylist: boolean; handleSave: any }) => {
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
