import React, { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";
import { IPlaylist } from "../Choices";
import Spotify from "../../util/spotify";

const MyPlaylistsDropdown = (props: {
	selectPlaylist: any;
	selectedPlaylist: string;
}) => {
	const [myPlaylists, setMyPlaylists] = useState<Array<any>>([]);

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
			onChange={props.selectPlaylist}
			placeholder="Select a playlist"
			selection
			value={props.selectedPlaylist}
			options={myPlaylists}
		/>
	);
};

export default MyPlaylistsDropdown;
