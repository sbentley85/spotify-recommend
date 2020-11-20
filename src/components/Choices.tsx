import React, { useEffect, useState } from "react";
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

export interface IPicks {
	name: string;
	id: string;
	artist?: string;
	smImg: { height: number; width: number; url: string };
	medImg: { height: number; width: number; url: string };
}

export interface IPlaylist {
	name: string;
	id: string;
	tracks: IPicks[];
	img: {};
}

const Choices = (props: any) => {
	const [selection, setSelection] = useState("top-artists");
	const [searchType, setSearchType] = useState("Artists");
	const [term, setTerm] = useState("long_term");
	const [playlistTracks, setPlaylistTracks] = useState([]);
	const [picks, setPicks] = useState<Array<IPicks>>([]);
	const [recommendations, setRecommendations] = useState([]);

	const updateSelection = (event: any, data: any) => {
		const choice = data.value;
		setSelection(choice);
	};

	const selectPlaylist = async (event: any, id: string) => {
		setPlaylistTracks([]);
		const tracks = await Spotify.getPlaylistTracks(id);
		setPlaylistTracks(tracks);
	};

	const updateTerm = (event: any, data: any) => {
		const termSelection = data.value;
		setTerm(termSelection);
	};

	const updateSearchType = (event: any, data: any) => {
		setPicks([]);
		setRecommendations([]);
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

	const handlePicks = (event: InputEvent, choice: IPicks) => {
		if (
			picks.filter((pick) => {
				return pick.id === choice.id;
			}).length !== 0
		) {
			removeFromPicks(choice);
		} else {
			addToPicks(choice);
		}
	};

	const addToPicks = (choice: IPicks) => {
		if (picks.length === 5) return;
		if (
			picks.filter((pick) => {
				return pick.id === choice.id;
			}).length !== 0
		) {
			return;
		}

		const newPicks = [...picks, choice];
		setPicks(newPicks);
	};

	const removeFromPicks = (choice: IPicks) => {
		const newPicks = picks.filter((pick) => {
			return pick.id !== choice.id;
		});
		setPicks(newPicks);
	};

	useEffect(() => {
		const getRecommendations = async () => {
			const recommendations = await Spotify.getRecommendations(
				picks,
				searchType
			);

			setRecommendations(recommendations);
		};
		picks.length !== 0 ? getRecommendations() : setRecommendations([]);
	}, [picks]);

	return (
		<>
			<Grid.Row columns={2}>
				<Grid.Column>
					<ChoicesInput
						searchType={searchType}
						selection={selection}
						updateSelection={updateSelection}
					/>
				</Grid.Column>
				<Grid.Column>
					<ChoicesSlider updateSearchType={updateSearchType} />
				</Grid.Column>
			</Grid.Row>
			<Grid.Row columns={2}>
				<Grid.Column>
					<div id="select">
						{selection === "search" ? (
							<SearchBar
								handlePicks={handlePicks}
								searchType={searchType}
							/>
						) : null}
						{selection === "my-playlists" ? (
							<>
								{playlistTracks.length > 0 ? (
									<>
										<BackButton clearTracks={clearTracks} />
										<TrackList
											handlePicks={handlePicks}
											tracks={playlistTracks}
										/>
									</>
								) : (
									<MyPlaylists
										selectPlaylist={selectPlaylist}
									/>
								)}
							</>
						) : null}
						{selection === "top-tracks" ? (
							<>
								<TermInput
									updateTerm={updateTerm}
									term={term}
								/>
								<TopTracks
									handlePicks={handlePicks}
									term={term}
								/>
							</>
						) : null}
						{selection === "top-artists" ? (
							<>
								<TermInput
									updateTerm={updateTerm}
									term={term}
								/>
								<TopArtists
									handlePicks={handlePicks}
									term={term}
								/>
							</>
						) : null}
					</div>
				</Grid.Column>
				<Grid.Column>
					<Picks
						searchType={searchType}
						picks={picks}
						handlePicks={handlePicks}
					/>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row columns={1}>
				<Grid.Column>
					<MyRecommendations tracks={recommendations} />
				</Grid.Column>
			</Grid.Row>
		</>
	);
};

export default Choices;
