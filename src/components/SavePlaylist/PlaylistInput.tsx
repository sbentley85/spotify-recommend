import React from "react";
import { Input } from "semantic-ui-react";
import { IPlayListNameCallback } from "../SavePlaylist/SavePlaylist";

const PlaylistInput = (props: { setName: IPlayListNameCallback }) => {
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
