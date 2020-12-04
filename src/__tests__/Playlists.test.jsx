import React from "react";
import Playlist from "../components/Playlists/Playlist";
import { shallow } from "enzyme";


const samplePlaylist = {
	id: "7vsDiGS6XunxvcgFjtp7p6",
	name: "stuff to dl",
	length: 204,
	img: {
		height: 60,
		url:
			"https://mosaic.scdn.co/60/ab67616d0000b273308d4353d4ab62712468a5ebab67616d0000b273636a52ebf89cab3ac84578afab67616d0000b273d37568e85d09fb84ea31959cab67616d0000b273e27f0acabbd9001e0df0af34",
		width: 60,
	},
};

const samplePlaylists = [
	{
		id: "7vsDiGS6XunxvcgFjtp7p6",
		name: "stuff to dl",
		length: 204,
		img: {
			height: 60,
			url:
				"https://mosaic.scdn.co/60/ab67616d0000b273308d4353d4ab62712468a5ebab67616d0000b273636a52ebf89cab3ac84578afab67616d0000b273d37568e85d09fb84ea31959cab67616d0000b273e27f0acabbd9001e0df0af34",
			width: 60,
		},
	},
	{
		id: "7vsDiGS6XunxvcgFjtp7p6",
		name: "stuff to dl",
		length: 204,
		img: {
			height: 60,
			url:
				"https://mosaic.scdn.co/60/ab67616d0000b273308d4353d4ab62712468a5ebab67616d0000b273636a52ebf89cab3ac84578afab67616d0000b273d37568e85d09fb84ea31959cab67616d0000b273e27f0acabbd9001e0df0af34",
			width: 60,
		},
	},
];

describe("Playlist component", () => {
	const clickFn = jest.fn();
	it("renders playlist without crashing", () => {
		shallow(
			<Playlist playlist={samplePlaylist} selectPlaylist={clickFn} />
		);
	});

	it("renders playlist details from props", () => {
		const myPlaylist = shallow(
			<Playlist playlist={samplePlaylist} selectPlaylist={clickFn} />
		);
		expect(myPlaylist).toMatchSnapshot();
	});
});

