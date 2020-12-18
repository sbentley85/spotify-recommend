import React from "react";
import { Input } from "semantic-ui-react";
import { IInputChangeCallback } from "../SavePlaylist/SavePlaylist";

const PlaylistInput = (props: { setName: IInputChangeCallback }) => {
	return (
		<Input
			placeholder="Name..."
			id="playlistInput"
			type="text"
			onChange={props.setName}
		/>
	);
};

export default PlaylistInput;
