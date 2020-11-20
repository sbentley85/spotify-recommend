import React, { useState } from "react";
import { IPicks } from "./Choices";
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
	const [playlistTracks, setPlaylistTracks] = useState<Array<IPicks>>([]);

	const selectPlaylist = async (event: any, id: string) => {
		setPlaylistTracks([]);
		const tracks = await Spotify.getPlaylistTracks(id);
		setPlaylistTracks(tracks);
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
						<>
							<TrackList
								handlePicks={props.handlePicks}
								tracks={playlistTracks}
							/>
							<BackButton clearTracks={clearTracks} />
						</>
					) : (
						<MyPlaylists selectPlaylist={selectPlaylist} />
					)}
				</>
			) : null}
			{props.selection === "top-tracks" ? (
				<>
					<TermInput
						updateTerm={props.updateTerm}
						term={props.term}
					/>
					<TopTracks
						handlePicks={props.handlePicks}
						term={props.term}
					/>
				</>
			) : null}
			{props.selection === "top-artists" ? (
				<>
					<TermInput
						updateTerm={props.updateTerm}
						term={props.term}
					/>
					<TopArtists
						handlePicks={props.handlePicks}
						term={props.term}
					/>
				</>
			) : null}
		</div>
	);
};

export default Selection;
