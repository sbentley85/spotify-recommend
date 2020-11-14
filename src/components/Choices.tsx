import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import SearchBar from "./SearchBar/SearchBar";
import MyPlaylists from "./MyPlaylists";
import TopTracks from "./TopTracks";
import TopArtists from "./TopArtists";
import ChoicesInput from "./ChoicesInput";
import "semantic-ui-css/semantic.min.css";

const Choices = (props: any) => {
	const methods = ["Artist", "Tracks", "Playlists", "Search"];
	const [selection, setSelection] = useState("Artists");
	const updateSelection = (event: any, data: any) => {
		console.log("setting selection method");
		const choice = data.value;
		console.log(choice);
		setSelection(choice);
	};

	return (
		<>
			<Grid.Row columns={1}>
				<Grid.Column>
					<ChoicesInput
						selection={selection}
						updateSelection={updateSelection}
					/>
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
