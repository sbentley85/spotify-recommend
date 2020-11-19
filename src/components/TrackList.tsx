import React from "react";
import Track from "./Track";

const TrackList = (props: {
	handlePicks?: any;
	tracks: { id: string; name: string; artist: string }[];
}) => {
	return (
		<div className="trackList">
			{props.tracks.map(
				(
					track: { id: string; name: string; artist: string },
					index: number
				) => {
					return (
						<Track
							handlePicks={props.handlePicks}
							track={track}
							key={index}
						/>
					);
				}
			)}
		</div>
	);
};

export default TrackList;
