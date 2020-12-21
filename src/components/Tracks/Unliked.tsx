import React, { SyntheticEvent } from "react";
import { Icon } from "semantic-ui-react";

const Unliked = (props: { handleLike: (event: SyntheticEvent) => void }) => {
	return <Icon name="heart outline" onClick={props.handleLike} />;
};

export default Unliked;
