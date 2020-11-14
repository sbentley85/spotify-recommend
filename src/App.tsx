import React, { useState } from "react";
import "./App.css";
import MyRecommendations from "./components/MyRecommendations";
import Picks from "./components/Picks";
import Choices from "./components/Choices";
import "semantic-ui-css/semantic.min.css";
import { Grid, Container } from "semantic-ui-react";

function App() {
	const [choice, setChoice] = useState("track");

	return (
		<div className="App">
			<Container>
				<h1>Spotify Recommend</h1>
				<Grid columns={1}>
					<Choices />
					<Grid.Row columns={2}>
						<Grid.Column>
							<Picks />
						</Grid.Column>
						<Grid.Column>
							<MyRecommendations />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</div>
	);
}

export default App;
