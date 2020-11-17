import React from "react";
import Track from "./Track";

const TrackList = (props: {
	addToPicks: any;
	tracks: { id: string; name: string; artist: string }[];
}) => {
	return (
		<div>
			{props.tracks.map(
				(track: { id: string; name: string; artist: string }) => {
					return (
						<Track
							addToPicks={props.addToPicks}
							track={track}
							key={track.id}
						/>
					);
				}
			)}
		</div>
	);
};

export default TrackList;
