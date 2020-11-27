import React from "react";
import { Button, Icon } from "semantic-ui-react";
import playlistStyles from "./playlist.module.css";

const BackButton = (props: any) => {
	return (
		<Button
			onClick={props.clearTracks}
			className={playlistStyles.back}
			icon
		>
			<Icon name="chevron circle left" />
		</Button>
	);
};

export default BackButton;
