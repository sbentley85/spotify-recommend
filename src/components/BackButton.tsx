import React from "react";
import { Button, Icon } from "semantic-ui-react";

const BackButton = (props: any) => {
	return (
		<Button onClick={props.clearTracks} id="back" icon>
			<Icon name="arrow alternate circle left outline" />
		</Button>
	);
};

export default BackButton;
