import React, { useState } from "react";
import SearchInput from "./SearchInput";
import Spotify from "../../util/spotify";
import SearchResults from "./SearchResults";

const SearchBar = (props: { handlePicks?: any; searchType: string }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchTracks, setSearchTracks] = useState(null);
	const [searchArtists, setSearchArtists] = useState(null);

	const updateSearchTerm = (event: any) => {
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
		<div id="searchBar">
			<div className="searchInput">
				<SearchInput onChange={updateSearchTerm} onSearch={onSearch} />
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
