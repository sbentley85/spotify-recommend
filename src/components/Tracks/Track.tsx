import React, { SyntheticEvent, useState } from "react";
import { IPicks } from "../Choices/Choices";
import trackStyles from "./tracks.module.css";
import { ITrackClick } from "../Recommendations/MyRecommendations";
import Likebutton from "./Likebutton";
import SpotifyUtils from "../../util/spotify";

const Track = (props: { track: IPicks; handleClick: ITrackClick }) => {
	const [liked, setLiked] = useState<boolean>(props.track.liked!);

	const handleLike = (event: SyntheticEvent) => {
		// send request to spotify, returns true is request successful
		// if successful update liked state variable
		if (SpotifyUtils.likeTrack(props.track.id)) setLiked(true);
	};

	const handleUnLike = (event: SyntheticEvent) => {
		// send request to spotify, returns true is request successful
		// if successful update liked state variable
		if (SpotifyUtils.likeTrack(props.track.id)) setLiked(false);
	};

	return (
		<div className={trackStyles.track}>
			<div className={trackStyles.trackWrapper}>
				<div
					className={trackStyles.trackImage}
					style={
						props.track.smImg
							? {
									backgroundImage: `url(${props.track.smImg.url})`,
							  }
							: { backgroundColor: "black" }
					}
				></div>
				<div
					className={trackStyles.trackDetails}
					onClick={(e) => props.handleClick(e, props.track)}
				>
					<div className={trackStyles.trackDetail}>
						{props.track.artist}

						{"  -  "}

						{props.track.name}
					</div>
				</div>
			</div>

			<Likebutton
				liked={liked!}
				handleLike={handleLike}
				handleUnLike={handleUnLike}
			/>
		</div>
	);
};

export default Track;
