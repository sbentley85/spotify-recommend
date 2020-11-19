import React from "react";
import Track from "./Track";

const TrackList = (props: {
	addToPicks?: any;
	tracks: { id: string; name: string; artist: string }[];
}) => {
	return (
		<div>
			{props.tracks.map(
				(
					track: { id: string; name: string; artist: string },
					index: number
				) => {
					return (
						<Track
							addToPicks={props.addToPicks}
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
