import React, { useState } from "react";
import PlaylistSlider from "./PlayListSlider";
import { IPicks } from "../Choices/Choices";
import Spotify from "../../util/spotify";

import PlaylistButton from "./PlaylistButton";
import PlaylistInput from "./PlaylistInput";
import MyPlaylistsDropdown from "./MyPlaylistsDropdown";

const SavePlaylist = (props: { tracks: IPicks[]; picks: IPicks[] }) => {
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
		const uris = props.tracks.map((track) => {
			return `spotify:track:${track.id}`;
		});

		const defaultName = props.picks
			.map((pick) => {
				return pick.name;
			})
			.join(", ");

		const name = playlistName === "" ? defaultName : playlistName;
		console.log(playlistName);
		Spotify.createPlaylist(name, uris);
	};

	const addToPlaylist = () => {
		const uris = props.tracks.map((track) => {
			return `spotify:track:${track.id}`;
		});
		if (selectedPlaylist === "") return;
		else Spotify.addToPlaylist(selectedPlaylist, uris);
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
						<MyPlaylistsDropdown
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
