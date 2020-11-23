import React, { useState } from "react";
import PlaylistSlider from "./PlayListSlider";
import { IPicks } from "../Choices";
import Spotify from "../../util/spotify";

import PlaylistButton from "./PlaylistButton";
import PlaylistInput from "./PlaylistInput";
import MyPlaylistDropdown from "./MyPlaylistDropdown";

const SavePlaylist = (props: { tracks: IPicks[] }) => {
	const [newPlaylist, setNewPlaylist] = useState<boolean>(false);
	const [playlistName, setPlaylistName] = useState<string>("");
	const [selectedPlaylist, setSelectedPlaylist] = useState<string>("");

	const selectPlaylist = (
		event: React.SyntheticEvent<HTMLElement, Event>,
		data: any
	) => {
		setSelectedPlaylist(data.value || "");
	};

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
		Spotify.createPlaylist(playlistName, uris);
	};

	const addToPlaylist = () => {
		console.log("adding to playlist");
		const uris = props.tracks.map((track) => {
			return `spotify:track:${track.id}`;
		});
		Spotify.addToPlaylist(selectedPlaylist, uris);
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
						<MyPlaylistDropdown
							selectPlaylist={selectPlaylist}
							selectedPlaylist={selectedPlaylist}
						/>
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
