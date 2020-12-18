import React from "react";
import Track from "./Track";
import { IPicks } from "../Choices/Choices";
import trackStyles from "./tracks.module.css";
import { ITrackClick } from "../Recommendations/MyRecommendations";

const TrackList = (props: { handleClick: ITrackClick; tracks: IPicks[] }) => {
	return props.tracks.length !== 0 ? (
		<div className={trackStyles.trackList}>
			{props.tracks.map((track: IPicks, index: number) => {
				return (
					<Track
						handleClick={props.handleClick}
						track={track}
						key={index}
					/>
				);
			})}
		</div>
	) : null;
};

export default TrackList;
