import React, { SyntheticEvent } from "react";
import { Icon } from "semantic-ui-react";

const Liked = (props: { handleUnLike: (event: SyntheticEvent) => void }) => {
	return <Icon onClick={props.handleUnLike} name="heart" />;
};

export default Liked;
