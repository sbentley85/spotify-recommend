import React, { useEffect, useState } from "react";
import spotify from "../util/spotify";
import Playlist from "./Playlist";

const MyPlaylists = (props: { selectPlaylist: any }) => {
	const [myPlaylists, setMyPlaylists] = useState([]);

	useEffect(() => {
		const getPlaylists = async () => {
			const playlists = await spotify.getPlaylists();
			setMyPlaylists(playlists);
		};
		if (myPlaylists.length === 0) getPlaylists();
	});

	return (
		<div id="my-playlists">
			{myPlaylists.length !== 0 ? (
				myPlaylists!.map((playlist: { name: string; id: string }) => {
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
