import React from "react";
import { shallow } from "enzyme";
import MyRecommendations from "../components/Recommendations/MyRecommendations";

const testTracks = [
	{
		id: "69u375BY4upymJzyAnSXRN",
		name: "You Caught the Light",
		artist: "CHVRCHES",
		medImg: {
			height: 300,
			url:
				"https://i.scdn.co/image/ab67616d00001e027ecffdcb0c079ce32b47be74",
			width: 300,
		},
		smImg: {
			height: 64,
			url:
				"https://i.scdn.co/image/ab67616d000048517ecffdcb0c079ce32b47be74",
			width: 64,
		},
		uri: "spotify:track:69u375BY4upymJzyAnSXRN",
	},
	{
		id: "69u375BY4upymJzyAnSXRN",
		name: "You Caught the Light",
		artist: "CHVRCHES",
		medImg: {
			height: 300,
			url:
				"https://i.scdn.co/image/ab67616d00001e027ecffdcb0c079ce32b47be74",
			width: 300,
		},
		smImg: {
			height: 64,
			url:
				"https://i.scdn.co/image/ab67616d000048517ecffdcb0c079ce32b47be74",
			width: 64,
		},
		uri: "spotify:track:69u375BY4upymJzyAnSXRN",
	},
];

describe("rendering Components", () => {
	it("renders MyRecommendations without crashing", () => {
		shallow(<MyRecommendations tracks={testTracks} picks={testTracks} />);
	});
});
