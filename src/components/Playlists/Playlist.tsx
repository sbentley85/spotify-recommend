import React from "react";
import playlistStyles from "../Tracks/tracks.module.css";

const Playlist = (props: any) => {
	return (
		<div
			onClick={(e) => props.selectPlaylist(e, props.playlist)}
			className={playlistStyles.playlist}
		>
			<div
				className={playlistStyles.playlistImage}
				style={
					props.playlist.img
						? { backgroundImage: `url(${props.playlist.img.url})` }
						: { backgroundColor: "black" }
				}
			></div>
			<div className={playlistStyles.playlistName}>
				{props.playlist.name}
			</div>
		</div>
	);
};

export default Playlist;
