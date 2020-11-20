import React from "react";

const Playlist = (props: any) => {
	return (
		<div
			onClick={(e) => props.selectPlaylist(e, props.playlist.id)}
			className="playlist"
		>
			<div
				className="playlistImage"
				style={
					props.playlist.img
						? { backgroundImage: `url(${props.playlist.img.url})` }
						: { backgroundColor: "black" }
				}
			></div>
			<div className="playlistName">{props.playlist.name}</div>
		</div>
	);
};

export default Playlist;
