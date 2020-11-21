import React from "react";
import Track from "./Track";
import { IPicks } from "./Choices";

const TrackList = (props: { handlePicks?: any; tracks: IPicks[] }) => {
	return props.tracks.length !== 0 ? (
		<div className="trackList">
			{props.tracks.map((track: IPicks, index: number) => {
				return (
					<Track
						handlePicks={props.handlePicks}
						track={track}
						key={index}
					/>
				);
			})}
		</div>
	) : null;
};

export default TrackList;
