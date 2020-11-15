import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import SearchBar from "./SearchBar/SearchBar";
import MyPlaylists from "./MyPlaylists";
import TopTracks from "./TopTracks";
import TopArtists from "./TopArtists";
import ChoicesInput from "./ChoicesInput";
import "semantic-ui-css/semantic.min.css";
import ChoicesSlider from "./ChoicesSlider";
import Spotify from "../util/spotify";

import TermInput from "./termInput";
import TrackList from "./TrackList";

const Choices = (props: any) => {
	const methods = ["Artist", "Tracks", "Playlists", "Search"];
	const [selection, setSelection] = useState("top-artists");
	const [searchType, setSearchType] = useState("Artists");
	const [term, setTerm] = useState("long_term");
	const [selectedPlaylist, setSelectedPlaylist] = useState("");
	const [playlistTracks, setPlaylistTracks] = useState([]);

	const updateSelection = (event: any, data: any) => {
		const choice = data.value;
		setSelection(choice);
	};

	const selectPlaylist = async (event: any) => {
		await setSelectedPlaylist(event.target.id);
		const tracks = await Spotify.getPlaylistTracks(event.target.id);
		setPlaylistTracks(tracks);
	};

	const updateTerm = (event: any, data: any) => {
		const termSelection = data.value;
		setTerm(termSelection);
	};

	const updateSearchType = (event: any, data: any) => {
		if (event.target.checked) {
			setSearchType("Tracks");
			setSelection("top-tracks");
		} else {
			setSearchType("Artists");
			setSelection("top-artists");
		}
	};

	return (
		<>
			<Grid.Row columns={1}>
				<Grid.Column>
					<ChoicesInput
						searchType={searchType}
						selection={selection}
						updateSelection={updateSelection}
					/>
					<ChoicesSlider updateSearchType={updateSearchType} />
				</Grid.Column>
			</Grid.Row>
			<Grid.Row columns={4}>
				{selection === "search" ? (
					<Grid.Column>
						<SearchBar searchType={searchType} />
					</Grid.Column>
				) : null}
				{selection === "my-playlists" ? (
					<>
						<Grid.Column>
							<MyPlaylists selectPlaylist={selectPlaylist} />
						</Grid.Column>
						<Grid.Column>
							{selectedPlaylist !== "" ? (
								<TrackList tracks={playlistTracks} />
							) : null}
						</Grid.Column>
					</>
				) : null}
				{selection === "top-tracks" ? (
					<Grid.Column>
						<TermInput updateTerm={updateTerm} term={term} />
						<TopTracks term={term} />
					</Grid.Column>
				) : null}
				{selection === "top-artists" ? (
					<Grid.Column>
						<TermInput updateTerm={updateTerm} term={term} />
						<TopArtists term={term} />
					</Grid.Column>
				) : null}
			</Grid.Row>
		</>
	);
};

export default Choices;
