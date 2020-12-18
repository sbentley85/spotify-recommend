import React, { useEffect, useState } from "react";
import spotify from "../../util/spotify";
import Playlist from "./Playlist";
import { IPlaylist } from "../Choices/Choices";
import playlistStyles from "../Tracks/tracks.module.css";
import { IPlaylistCallback } from "../Selection/Selection";

const MyPlaylists = (props: { selectPlaylist: IPlaylistCallback }) => {
	const [myPlaylists, setMyPlaylists] = useState<Array<IPlaylist>>([]);

	useEffect(() => {
		const getPlaylists = async () => {
			const playlists = await spotify.getPlaylists();
			setMyPlaylists(playlists);
		};
		if (myPlaylists.length === 0) getPlaylists();
	}, []);

	return (
		<div className={playlistStyles.myPlaylists}>
			{myPlaylists.length !== 0 ? (
				myPlaylists!.map((playlist: IPlaylist) => {
					return (
						<Playlist
							selectPlaylist={props.selectPlaylist}
							playlist={playlist}
							key={playlist.id}
						/>
					);
				})
			) : (
				<></>
			)}
		</div>
	);
};

export default MyPlaylists;
