import Choices from "../components/Choices/Choices";
import React from "react";

import { shallow } from "enzyme";

describe("rendering componenets", () => {
	it("Renders Choices component without crashing", () => {
		shallow(<Choices />);
	});
});
