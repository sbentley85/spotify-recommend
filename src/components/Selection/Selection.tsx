import React, { useState } from "react";
import { IPlaylist } from "../Choices/Choices";
import SearchBar from "../SearchBar/SearchBar";
import MyPlaylists from "../Playlists/MyPlaylists";
import TopTracks from "../Tracks/TopTracks";
import TopArtists from "../Artists/TopArtists";
import TermInput from "./termInput";
import TrackList from "../Tracks/TrackList";
import BackButton from "../Playlists/BackButton";
import Spotify from "../../util/spotify";
import selectionStyles from "./selection.module.css";

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
		<div className={selectionStyles.select}>
			{props.selection === "search" ? (
				<SearchBar
					handlePicks={props.handlePicks}
					searchType={props.searchType}
				/>
			) : null}
			{props.selection === "my-playlists" ? (
				<>
					{playlistTracks.length > 0 ? (
						<div className={selectionStyles.playlistContainer}>
							<div className={selectionStyles.playlistTitle}>
								{playlistName}
							</div>
							<div className="playlistTracks">
								<TrackList
									handleClick={props.handlePicks}
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
