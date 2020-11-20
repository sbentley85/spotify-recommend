import React from "react";
import { Input } from "semantic-ui-react";

const SearchInput = (props: { onChange: any; onSearch: any }) => (
	<Input
		icon={{ name: "search", onClick: props.onSearch }}
		placeholder="Search..."
		onChange={props.onChange}
		id="input"
	/>
);

export default SearchInput;
