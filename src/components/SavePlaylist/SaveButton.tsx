import React from "react";
import { Button, Icon } from "semantic-ui-react";

const SaveButton = (props: { handleSave: () => void }) => {
	return (
		<Button onClick={props.handleSave} id="save" icon>
			<Icon name="save outline" />
		</Button>
	);
};

export default SaveButton;
