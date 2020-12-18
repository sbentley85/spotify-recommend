import React from "react";
import { Button, Icon } from "semantic-ui-react";

const AddButton = (props: { handleSave: () => void }) => {
	return (
		<Button onClick={props.handleSave} id="add" icon>
			<Icon name="add" />
		</Button>
	);
};

export default AddButton;
