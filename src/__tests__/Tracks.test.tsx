import React from "react";
import Track from "../components/Tracks/Track";
import { shallow } from "enzyme";
import TrackList from "../components/Tracks/TrackList";
import trackStyles from "./tracks.module.css";

// sample track
const sampleTrack = {
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

const sampleTracks = [
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
		id: "3rtJW3GqUTBJXF9nAv3Bp6",
		name: "Cosmonaut",
		artist: "At The Drive In",
		medImg: {
			height: 300,
			url:
				"https://i.scdn.co/image/ab67616d00001e02d8077764c1d0f76baac75478",
			width: 300,
		},
		smImg: {
			height: 64,
			url:
				"https://i.scdn.co/image/ab67616d00004851d8077764c1d0f76baac75478",
			width: 64,
		},
		uri: "spotify:track:3rtJW3GqUTBJXF9nAv3Bp6",
	},
];

describe("Track component", () => {
	it("renders Track component without crashing", () => {
		const mytrack = shallow(
			<Track
				track={sampleTrack}
				handleClick={() => {
					console.log("testing Track component onclick");
				}}
			/>
		);
	});

	it("renders Track & Artist name from props", () => {
		const myTrack = shallow(
			<Track
				track={sampleTrack}
				handleClick={() => {
					console.log("testing Track component onclick");
				}}
			/>
		);
		expect(myTrack).toMatchSnapshot();
	});

	const clickFn = jest.fn();

	// onclick moved temporarily to trackwrapper div
	it("track click should call onClick function", () => {
		const myTrack = shallow(
			<Track track={sampleTrack} handleClick={clickFn} />
		);
		const trackWrapperDiv = myTrack.find(`.${trackStyles.trackDetails}`);
		trackWrapperDiv.simulate("click");
		expect(clickFn).toHaveBeenCalled();
	});
});

describe("TrackList component", () => {
	const clickFn = jest.fn();
	it("renders Tracklist without crashing", () => {
		shallow(<TrackList tracks={sampleTracks} handleClick={clickFn} />);
	});

	it("renders a list of tracks from props", () => {
		const myTrackList = shallow(
			<TrackList tracks={sampleTracks} handleClick={clickFn} />
		);
		expect(myTrackList).toMatchSnapshot();
	});
});
