import React, { useState } from "react";
import { InputOnChangeData } from "semantic-ui-react";
import SearchInput from "./SearchInput";
import Spotify from "../../util/spotify";
import SearchResults from "./SearchResults";
import { IPickCallback } from "../Choices/Choices";
import selectionStyles from "../Selection/selection.module.css";
import searchStyles from "./search.module.css";

const SearchBar = (props: {
	handlePicks: IPickCallback;
	searchType: string;
}) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchTracks, setSearchTracks] = useState(null);
	const [searchArtists, setSearchArtists] = useState(null);

	const updateSearchTerm = (
		event: React.ChangeEvent<HTMLInputElement>,
		data: InputOnChangeData
	) => {
		const term = event.target.value;
		setSearchTerm(term);
		onSearch();
	};

	const onSearch = async () => {
		if (props.searchType === "Tracks") {
			const tracks = await Spotify.searchTracks(searchTerm);
			setSearchTracks(tracks);
		}
		if (props.searchType === "Artists") {
			const artists = await Spotify.searchArtists(searchTerm);

			setSearchArtists(artists);
		}
	};

	return (
		<div className={searchStyles.searchBar}>
			<div className={selectionStyles.searchInput}>
				<SearchInput
					updateSearchTerm={updateSearchTerm}
					onSearch={onSearch}
				/>
			</div>

			{searchTracks ? (
				<SearchResults
					handlePicks={props.handlePicks}
					tracks={searchTracks}
				/>
			) : (
				<></>
			)}
			{searchArtists ? (
				<SearchResults
					handlePicks={props.handlePicks}
					artists={searchArtists}
				/>
			) : (
				<></>
			)}
		</div>
	);
};

export default SearchBar;
