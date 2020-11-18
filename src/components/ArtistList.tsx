import React from "react";
import Artist from "./Artist";

const ArtistList = (props: {
	artists: { name: string; id: string }[];
	addToPicks?: any;
}) => {
	return (
		<div>
			{props.artists.map((artist: { name: string; id: string }) => {
				return (
					<Artist
						addToPicks={props.addToPicks}
						artist={artist}
						key={artist.id}
					/>
				);
			})}
		</div>
	);
};

export default ArtistList;
