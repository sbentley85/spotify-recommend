import React, { useState } from "react";
import PlaylistSlider from "./PlayListSlider";
import { IPicks } from "../Choices";

import PlaylistButton from "./PlaylistButton";

const SavePlaylist = (props: { tracks: IPicks[] }) => {
	const [newPlaylist, setNewPlaylist] = useState<boolean>(false);

	const updateNewPlayList = (event: any, data: any) => {
		setNewPlaylist(event.target.checked);
	};

	return (
		<div>
			{props.tracks.length !== 0 ? (
				<>
					<PlaylistSlider updateNewPlaylist={updateNewPlayList} />
					<PlaylistButton newPlaylist={newPlaylist} />
				</>
			) : null}
		</div>
	);
};

export default SavePlaylist;
