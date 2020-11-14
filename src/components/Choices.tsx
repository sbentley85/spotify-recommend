import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import SearchBar from "./SearchBar/SearchBar";
import MyPlaylists from "./MyPlaylists";
import TopTracks from "./TopTracks";
import TopArtists from "./TopArtists";
import ChoicesInput from "./ChoicesInput";
import "semantic-ui-css/semantic.min.css";
import ChoicesSlider from "./ChoicesSlider";

const Choices = (props: any) => {
	const methods = ["Artist", "Tracks", "Playlists", "Search"];
	const [selection, setSelection] = useState("top-artists");
	const [searchType, setSearchType] = useState("Artists");

	const updateSelection = (event: any, data: any) => {
		const choice = data.value;
		setSelection(choice);
	};

	const updateSearchType = (event: any, data: any) => {
		if (event.target.checked) setSearchType("Tracks");
		else setSearchType("Artists");
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
				<Grid.Column>
					<SearchBar />
				</Grid.Column>
				<Grid.Column>
					<MyPlaylists />
				</Grid.Column>
				<Grid.Column>
					<TopTracks />
				</Grid.Column>
				<Grid.Column>
					<TopArtists />
				</Grid.Column>
			</Grid.Row>
		</>
	);
};

export default Choices;
