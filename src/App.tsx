import React from "react";
import "./App.css";

import Choices from "./components/Choices/Choices";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";

function App() {
	return (
		<div className="App">
			<Container>
				<Choices />
			</Container>
		</div>
	);
}

export default App;
