import React from "react";
import { shallow } from "enzyme";
import {
	render,
	cleanup,
	fireEvent,
	getAllByRole,
} from "@testing-library/react";

import Settings from "../components/Selection/Settings";
import ChoicesInput from "../components/Choices/ChoicesInput";

const ArtistOptions = [
	{
		key: "top-artists",
		text: "My Top Artists",
		value: "top-artists",
	},
	{
		key: "search",
		text: "Search",
		value: "search",
	},
];

describe("rendering components", () => {
	it("Renders Settings component without crashing", () => {
		shallow(
			<Settings
				searchType="test"
				selection="test"
				updateSelection={() => {
					console.log("");
				}}
				updateSearchType={() => {
					console.log("");
				}}
			/>
		);
	});

	it("renders choices input component without crashing", () => {
		shallow(
			<ChoicesInput
				searchType="Artists"
				selection="top-artists"
				updateSelection={() => {
					console.log("test");
				}}
			/>
		);
	});
});

describe("Dropdown", () => {
	it("can change the value of the dropdown", () => {
		let testSelection = "top-artists";

		// render 1
		const { getByTestId } = render(
			<ChoicesInput
				searchType="Artists"
				selection={testSelection}
				updateSelection={(event: any, data: any) => {
					testSelection = data.value;
				}}
			/>
		);

		const dropdown = getByTestId("dropdown");

		const display = dropdown.children[0];

		expect(display.textContent).toBe(ArtistOptions[0].text);

		fireEvent.click(dropdown);

		const dropdownOptions = getAllByRole(dropdown, "option");

		fireEvent.click(dropdownOptions[1]);

		cleanup();
		// render 2

		render(
			<ChoicesInput
				searchType="Artists"
				selection={testSelection}
				updateSelection={(event: any, data: any) => {
					testSelection = data.value;
				}}
			/>
		);

		const dropdown2 = getByTestId("dropdown");

		const display2 = dropdown2.children[0];

		expect(display2.textContent).toBe(ArtistOptions[1].text);
	});
});
