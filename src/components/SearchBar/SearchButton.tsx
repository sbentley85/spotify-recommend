import React from "react";
import { Button } from "semantic-ui-react";

const SearchButton = (props: {
	onSearch: React.MouseEventHandler<HTMLButtonElement>;
}) => <Button onClick={props.onSearch}>Click Here</Button>;

export default SearchButton;
