import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import SearchBar from "./SearchBar/SearchBar";
import MyPlaylists from "./MyPlaylists";
import TopTracks from "./TopTracks";
import TopArtists from "./TopArtists";
import ChoicesInput from "./ChoicesInput";
import "semantic-ui-css/semantic.min.css";
import ChoicesSlider from "./ChoicesSlider";
import BackButton from "./BackButton";
import Spotify from "../util/spotify";

import TermInput from "./termInput";
import TrackList from "./TrackList";
import MyRecommendations from "./MyRecommendations";
import Picks from "./Picks";

const Choices = (props: any) => {
	const [selection, setSelection] = useState("top-artists");
	const [searchType, setSearchType] = useState("Artists");
	const [term, setTerm] = useState("long_term");
	const [selectedPlaylist, setSelectedPlaylist] = useState("");
	const [playlistTracks, setPlaylistTracks] = useState([]);
	const [picks, setPicks] = useState<Array<IPicks>>([]);

	interface IPicks {
		name: string;
		id: string;
		artist?: string;
	}

	const updateSelection = (event: any, data: any) => {
		const choice = data.value;
		setSelection(choice);
	};

	const selectPlaylist = async (event: any, id: string) => {
		setPlaylistTracks([]);
		setSelectedPlaylist("");
		await setSelectedPlaylist(id);
		const tracks = await Spotify.getPlaylistTracks(id);
		setPlaylistTracks(tracks);
	};

	const updateTerm = (event: any, data: any) => {
		const termSelection = data.value;
		setTerm(termSelection);
	};

	const updateSearchType = (event: any, data: any) => {
		setPicks([]);
		if (event.target.checked) {
			setSearchType("Tracks");
			setSelection("top-tracks");
		} else {
			setSearchType("Artists");
			setSelection("top-artists");
		}
	};

	const clearTracks = () => {
		setPlaylistTracks([]);
	};

	const addToPicks = (
		event: any,
		choice: { id: string; name: string; artist?: string }
	) => {
		console.log("adding to picks");
		console.log(choice);
		const newPicks = [...picks, choice];
		setPicks(newPicks);
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
			<Grid.Row columns={3}>
				{selection === "search" ? (
					<Grid.Column>
						<SearchBar
							addToPicks={addToPicks}
							searchType={searchType}
						/>
					</Grid.Column>
				) : null}
				{selection === "my-playlists" ? (
					<>
						<Grid.Column>
							{playlistTracks.length > 0 ? (
								<>
									<BackButton clearTracks={clearTracks} />
									<TrackList
										addToPicks={addToPicks}
										tracks={playlistTracks}
									/>
								</>
							) : (
								<MyPlaylists selectPlaylist={selectPlaylist} />
							)}
						</Grid.Column>
					</>
				) : null}
				{selection === "top-tracks" ? (
					<Grid.Column>
						<TermInput updateTerm={updateTerm} term={term} />
						<TopTracks addToPicks={addToPicks} term={term} />
					</Grid.Column>
				) : null}
				{selection === "top-artists" ? (
					<Grid.Column>
						<TermInput updateTerm={updateTerm} term={term} />
						<TopArtists addToPicks={addToPicks} term={term} />
					</Grid.Column>
				) : null}
				<Grid.Column>
					<Picks searchType={searchType} picks={picks} />
				</Grid.Column>
				<Grid.Column>
					<MyRecommendations />
				</Grid.Column>
			</Grid.Row>
		</>
	);
};

export default Choices;
