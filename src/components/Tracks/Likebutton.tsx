import React, { SyntheticEvent } from "react";
import trackStyles from "./tracks.module.css";
import Liked from "./Liked";
import Unliked from "./Unliked";

const Likebutton = (props: {
	liked: boolean;
	handleLike: (event: SyntheticEvent) => void;
	handleUnLike: (event: SyntheticEvent) => void;
}) => {
	return (
		<div className={trackStyles.likeButton}>
			{props.liked ? (
				<Liked handleUnLike={props.handleUnLike} />
			) : (
				<Unliked handleLike={props.handleLike} />
			)}
		</div>
	);
};

export default Likebutton;
