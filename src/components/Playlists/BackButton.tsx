import React from "react";
import { Button, Icon } from "semantic-ui-react";

const BackButton = (props: any) => {
	return (
		<Button onClick={props.clearTracks} id="back" icon>
			<Icon name="chevron circle left" />
		</Button>
	);
};

export default BackButton;
