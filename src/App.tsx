import React from "react";
import "./App.css";

import Choices from "./components/Choices";
import "semantic-ui-css/semantic.min.css";
import { Grid, Container } from "semantic-ui-react";

function App() {
	return (
		<div className="App">
			<Container>
				<h1>Spotify Recommend</h1>
				<Grid columns={1}>
					<Choices />
				</Grid>
			</Container>
		</div>
	);
}

export default App;
