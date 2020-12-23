import React, { SyntheticEvent, useState } from "react";
import {
	IPicks,
	IPlaylist,
	IPickCallback,
	IDropdownCallback,
} from "../Choices/Choices";
import SearchBar from "../SearchBar/SearchBar";
import MyPlaylists from "../Playlists/MyPlaylists";
import TopTracks from "../Tracks/TopTracks";
import TopArtists from "../Artists/TopArtists";
import TermInput from "./termInput";
import TrackList from "../Tracks/TrackList";
import BackButton from "../Playlists/BackButton";
import Spotify from "../../util/spotify";
import selectionStyles from "./selection.module.css";
import Recenttracks from "../Tracks/RecentTracks";

const Selection = (props: {
	handlePicks: IPickCallback;
	searchType: string;

	selection: string;
	term: string;
	updateTerm: (event: SyntheticEvent, value: string) => void;
}) => {
	const [playlistTracks, setPlaylistTracks] = useState<Array<IPicks>>([]);
	const [playlistName, setPlaylistName] = useState<string>("");

	const selectPlaylist = async (
		event: SyntheticEvent,
		playlist: IPlaylist
	) => {
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
								<BackButton clearTracks={clearTracks} />

								<div className={selectionStyles.playlistName}>
									{playlistName}
								</div>
							</div>
							<div className="playlistTracks">
								<TrackList
									handleClick={props.handlePicks}
									tracks={playlistTracks}
								/>
							</div>
						</div>
					) : (
						<MyPlaylists selectPlaylist={selectPlaylist} />
					)}
				</>
			) : null}
			{props.selection === "top-tracks" ? (
				<div className={selectionStyles.termContainer}>
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
			{props.selection === "recent-tracks" ? (
				<Recenttracks handlePicks={props.handlePicks} />
			) : null}

			{props.selection === "top-artists" ? (
				<div className={selectionStyles.termContainer}>
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

// Interfaces

export interface IPlaylistCallback {
	(event: SyntheticEvent, playlist: IPlaylist): void;
}
