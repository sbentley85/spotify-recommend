import React from "react";
import { Input } from "semantic-ui-react";

const PlaylistInput = (props: { setName: any }) => {
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
