import React, { useState } from "react";
import { IPlaylist } from "./Choices";
import SearchBar from "./SearchBar/SearchBar";
import MyPlaylists from "./MyPlaylists";
import TopTracks from "./TopTracks";
import TopArtists from "./TopArtists";
import TermInput from "./termInput";
import TrackList from "./TrackList";
import BackButton from "./BackButton";
import Spotify from "../util/spotify";

const Selection = (props: {
	handlePicks: any;
	searchType: string;

	selection: string;
	term: string;
	updateTerm: any;
}) => {
	const [playlistTracks, setPlaylistTracks] = useState<any>([]);
	const [playlistName, setPlaylistName] = useState<string>("");

	const selectPlaylist = async (event: any, playlist: IPlaylist) => {
		setPlaylistTracks([]);
		const tracks = await Spotify.getPlaylistTracks(playlist);
		await setPlaylistTracks(tracks);
		await setPlaylistName(playlist.name);
	};

	const clearTracks = () => {
		setPlaylistTracks([]);
	};

	return (
		<div id="select">
			{props.selection === "search" ? (
				<SearchBar
					handlePicks={props.handlePicks}
					searchType={props.searchType}
				/>
			) : null}
			{props.selection === "my-playlists" ? (
				<>
					{playlistTracks.length > 0 ? (
						<div className="playlistContainer">
							<div className="playlistTitle">{playlistName}</div>
							<div className="playlistTracks">
								<TrackList
									handlePicks={props.handlePicks}
									tracks={playlistTracks}
								/>
							</div>

							<BackButton clearTracks={clearTracks} />
						</div>
					) : (
						<MyPlaylists selectPlaylist={selectPlaylist} />
					)}
				</>
			) : null}
			{props.selection === "top-tracks" ? (
				<div className="termContainer">
					<TermInput
						updateTerm={props.updateTerm}
						term={props.term}
					/>
					<TopTracks
						handlePicks={props.handlePicks}
						term={props.term}
					/>
				</div>
			) : null}
			{props.selection === "top-artists" ? (
				<div className="termContainer">
					<TermInput
						updateTerm={props.updateTerm}
						term={props.term}
					/>
					<TopArtists
						handlePicks={props.handlePicks}
						term={props.term}
					/>
				</div>
			) : null}
		</div>
	);
};

export default Selection;
