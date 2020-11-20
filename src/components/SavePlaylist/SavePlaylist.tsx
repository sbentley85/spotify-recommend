import React, { useState } from "react";
import PlaylistSlider from "./PlayListSlider";
import { IPicks } from "../Choices";

const SavePlaylist = (props: { tracks: IPicks[] }) => {
	const [newPlaylist, setNewPlaylist] = useState<Boolean>(false);

	const updateNewPlayList = (event: any, data: any) => {
		setNewPlaylist(event.target.checked);
	};
	return (
		<div>
			{props.tracks.length !== 0 ? (
				<PlaylistSlider updateNewPlaylist={updateNewPlayList} />
			) : null}
		</div>
	);
};

export default SavePlaylist;
