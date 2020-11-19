import React from "react";
// import { render, screen } from '@testing-library/react';
import App from "../App";
import SearchBar from "../components/SearchBar/SearchBar";
import enzyme, { shallow } from "enzyme";

describe("rendering componenets", () => {
	it("Renders App component without crashing", () => {
		shallow(<App />);
	});

	it("renders App component header", () => {
		const wrapper = shallow(<App />);
		const header = <h1>Spotify Recommend</h1>;
		expect(wrapper.contains(header)).toEqual(true);
	});

	it("Renders SearchBar without crashing", () => {
		shallow(<SearchBar />);
	});
});
