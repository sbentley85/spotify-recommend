import React from "react";
import Artist from "../components/Artists/Artist";
import { shallow } from "enzyme";
import ArtistList from "../components/Artists/ArtistList";

// sample track
const sampleArtist = {
	id: "3CjlHNtplJyTf9npxaPl5w",
	name: "CHVRCHES",
	medImg: {
		height: 320,
		url: "https://i.scdn.co/image/64a6c54b7bea1c2c314da545c3f5048d28f48c3b",
		width: 320,
	},
	smImg: {
		height: 160,
		url: "https://i.scdn.co/image/a5b058c5287ade15994f668a46f5d7f782dae97e",
		width: 160,
	},
	uri: "spotify:artist:3CjlHNtplJyTf9npxaPl5w",
};

const sampleArtists = [
	{
		id: "3CjlHNtplJyTf9npxaPl5w",
		name: "CHVRCHES",
		medImg: {
			height: 320,
			url:
				"https://i.scdn.co/image/64a6c54b7bea1c2c314da545c3f5048d28f48c3b",
			width: 320,
		},
		smImg: {
			height: 160,
			url:
				"https://i.scdn.co/image/a5b058c5287ade15994f668a46f5d7f782dae97e",
			width: 160,
		},
		uri: "spotify:artist:3CjlHNtplJyTf9npxaPl5w",
	},
	{
		id: "3TVXtAsR1Inumwj472S9r4",
		name: "Drake",
		medImg: {
			height: 320,
			url:
				"https://i.scdn.co/image/5ea794cf832550943d5f8122afcf5f23ee9d85b7",
			width: 320,
		},
		smImg: {
			height: 160,
			url:
				"https://i.scdn.co/image/8eaace74aaca82eaccde400bbcab2653b9cf86e1",
			width: 160,
		},
		uri: "spotify:artist:3TVXtAsR1Inumwj472S9r4",
	},
];

describe("Artist Component", () => {
	it("renders Artist component", () => {
		shallow(
			<Artist
				artist={sampleArtist}
				handleClick={() => {
					console.log("testing Artist onClick");
				}}
			/>
		);
	});

	it("renders Artist details from props", () => {
		const myArtist = shallow(
			<Artist
				artist={sampleArtist}
				handleClick={() => {
					console.log("testing Artist onClick");
				}}
			/>
		);
		expect(myArtist).toMatchSnapshot();
	});

	const clickFn = jest.fn();

	it("Artist click should call onClick function", () => {
		const myArtist = shallow(
			<Artist artist={sampleArtist} handleClick={clickFn} />
		);
		myArtist.simulate("click");
		expect(clickFn).toHaveBeenCalled();
	});
});

describe("ArtistList component", () => {
	const clickFn = jest.fn();
	it("renders ArtistList without crashing", () => {
		shallow(<ArtistList artists={sampleArtists} handleClick={clickFn} />);
	});
	it("renders a list of Artist components from props", () => {
		const myArtistList = shallow(
			<ArtistList artists={sampleArtists} handleClick={clickFn} />
		);
		expect(myArtistList).toMatchSnapshot();
	});
});
