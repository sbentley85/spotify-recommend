import React from "react";

const Playlist = (props: any) => {
	return (
		<div onClick={(e) => props.selectPlaylist(e, props.playlist.id)}>
			{props.playlist.name}
		</div>
	);
};

export default Playlist;
