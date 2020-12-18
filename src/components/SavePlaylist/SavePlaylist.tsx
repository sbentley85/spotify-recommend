import React, { useState, SyntheticEvent, FormEvent } from "react";
import PlaylistSlider from "./PlayListSlider";
import { IPicks } from "../Choices/Choices";
import Spotify from "../../util/spotify";

import PlaylistButton from "./PlaylistButton";
import PlaylistInput from "./PlaylistInput";
import MyPlaylistsDropdown from "./MyPlaylistsDropdown";
import {
	DropdownProps,
	InputOnChangeData,
	CheckboxProps,
} from "semantic-ui-react";

const SavePlaylist = (props: { tracks: IPicks[]; picks: IPicks[] }) => {
	const [newPlaylist, setNewPlaylist] = useState<boolean>(false);
	const [playlistName, setPlaylistName] = useState<string>("");
	const [selectedPlaylist, setSelectedPlaylist] = useState<string>("");

	const selectMyPlaylist = (
		event: SyntheticEvent<HTMLElement, Event>,
		data: DropdownProps
	) => {
		setSelectedPlaylist((data.value as string) || "");
	};

	const updateNewPlayList = (
		event: FormEvent<HTMLInputElement>,
		data: CheckboxProps
	) => {
		setNewPlaylist(data.checked as boolean);
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

	const setName = (
		event: React.ChangeEvent<HTMLInputElement>,
		data: InputOnChangeData
	) => {
		setPlaylistName(data.value);
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
							selectMyPlaylist={selectMyPlaylist}
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

// Interfaces

export interface IPlayListNameCallback {
	(event: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData): void;
}
