import React from "react";
// import { render, screen } from '@testing-library/react';
import App from "../App";
import SearchBar from "../components/SearchBar/SearchBar";

import { shallow } from "enzyme";

const track = {
	id: "69u375BY4upymJzyAnSXRN",
	name: "You Caught the Light",
	artist: "CHVRCHES",
	medImg: {
		height: 300,
		url: "https://i.scdn.co/image/ab67616d00001e027ecffdcb0c079ce32b47be74",
		width: 300,
	},
	smImg: {
		height: 64,
		url: "https://i.scdn.co/image/ab67616d000048517ecffdcb0c079ce32b47be74",
		width: 64,
	},
	uri: "spotify:track:69u375BY4upymJzyAnSXRN",
};

describe("rendering componenets", () => {
	it("Renders App component without crashing", () => {
		shallow(<App />);
	});

	it("Renders SearchBar without crashing", () => {
		shallow(
			<SearchBar
				handlePicks={() => {
					console.log("");
				}}
				searchType="test"
			/>
		);
	});

	// it("renders App component header", () => {
	// 	const wrapper = shallow(<App />);
	// 	const header = <h1>Spotify Recommend</h1>;
	// 	expect(wrapper.contains(header)).toEqual(true);
	// });
});
