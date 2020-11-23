import React, { useState } from "react";
import PlaylistSlider from "./PlayListSlider";
import { IPicks } from "../Choices";
import Spotify from "../../util/spotify";

import PlaylistButton from "./PlaylistButton";
import PlaylistInput from "./PlaylistInput";
import MyPlaylistDropdown from "./myPlaylistDropdown";

const SavePlaylist = (props: { tracks: IPicks[] }) => {
	const [newPlaylist, setNewPlaylist] = useState<boolean>(false);
	const [playlistName, setPlaylistName] = useState<string>("");

	const updateNewPlayList = (event: any, data: any) => {
		setNewPlaylist(event.target.checked);
	};

	const handleSave = () => {
		newPlaylist ? createPlaylist() : addToPlaylist();
	};

	const createPlaylist = () => {
		console.log("creating a new playlist");
		const uris = props.tracks.map((track) => {
			return `spotify:track:${track.id}`;
		});

		console.log(playlistName);
		console.log(uris);
		Spotify.createPlaylist(playlistName, uris);
	};

	const addToPlaylist = () => {
		console.log("adding to playlist");
	};

	const setName = (event: any) => {
		setPlaylistName(event.target.value);
	};

	return (
		<div>
			{props.tracks.length !== 0 ? (
				<>
					<PlaylistSlider updateNewPlaylist={updateNewPlayList} />
					{newPlaylist ? (
						<PlaylistInput setName={setName} />
					) : (
						<MyPlaylistDropdown />
					)}
					<PlaylistButton
						handleSave={handleSave}
						newPlaylist={newPlaylist}
					/>
				</>
			) : null}
		</div>
	);
};

export default SavePlaylist;
