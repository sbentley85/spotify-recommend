import React from "react";
import { IPicks } from "./Choices";
import SearchBar from "./SearchBar/SearchBar";
import MyPlaylists from "./MyPlaylists";
import TopTracks from "./TopTracks";
import TopArtists from "./TopArtists";
import TermInput from "./termInput";
import TrackList from "./TrackList";
import BackButton from "./BackButton";

const Selection = (props: {
	handlePicks: any;
	searchType: string;
	playlistTracks: IPicks[];
	clearTracks: any;
	selectPlaylist: any;
	selection: string;
	term: string;
	updateTerm: any;
}) => {
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
					{props.playlistTracks.length > 0 ? (
						<>
							<TrackList
								handlePicks={props.handlePicks}
								tracks={props.playlistTracks}
							/>
							<BackButton clearTracks={props.clearTracks} />
						</>
					) : (
						<MyPlaylists selectPlaylist={props.selectPlaylist} />
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
