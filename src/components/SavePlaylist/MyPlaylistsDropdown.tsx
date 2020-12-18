import React, { useEffect, useState } from "react";
import { Dropdown, DropdownItemProps } from "semantic-ui-react";
import { IPlaylist, IDropdownCallback } from "../Choices/Choices";

import Spotify from "../../util/spotify";

const MyPlaylistsDropdown = (props: {
	selectMyPlaylist: IDropdownCallback;
	selectedPlaylist: string;
}) => {
	const [myPlaylists, setMyPlaylists] = useState<Array<DropdownItemProps>>(
		[]
	);

	useEffect(() => {
		const getPlaylists = async () => {
			const playlists = await Spotify.getMyPlaylists();
			setMyPlaylists(
				playlists.map((playlist: IPlaylist) => {
					return {
						key: playlist.id,
						text: playlist.name,
						value: playlist.id,
					};
				})
			);
		};

		if (myPlaylists.length === 0) getPlaylists();
	});

	return (
		<Dropdown
			onChange={props.selectMyPlaylist}
			placeholder="Select a playlist"
			selection
			value={props.selectedPlaylist}
			options={myPlaylists}
		/>
	);
};

export default MyPlaylistsDropdown;
