import React from "react";
import AddButton from "./AddButton";
import SaveButton from "./SaveButton";

const PlaylistButton = (props: { newPlaylist: boolean }) => {
	return <>{props.newPlaylist ? <SaveButton /> : <AddButton />}</>;
};

export default PlaylistButton;
