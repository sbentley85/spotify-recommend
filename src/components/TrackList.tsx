import React from "react";
import Track from "./Track";
import { IPicks } from "./Choices";

const TrackList = (props: { handleClick?: any; tracks: IPicks[] }) => {
	return props.tracks.length !== 0 ? (
		<div className="trackList">
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
