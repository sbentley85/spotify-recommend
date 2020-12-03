import React from "react";
import { shallow } from "enzyme";
import Selection from "../components/Selection/Selection";

describe("rendering componenets", () => {
	it("Renders Selection component without crashing", () => {
		shallow(
			<Selection
				handlePicks={() => {
					console.log("");
				}}
				searchType="test"
				selection="test"
				term="test"
				updateTerm="test"
			/>
		);
	});
});
