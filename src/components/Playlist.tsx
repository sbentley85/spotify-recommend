import React from "react";

const Playlist = (props: any) => {
	return (
		<div id={props.playlist.id} onClick={props.selectPlaylist}>
			{props.playlist.name}
		</div>
	);
};

export default Playlist;
