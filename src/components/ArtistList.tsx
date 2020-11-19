import React from "react";
import Artist from "./Artist";

const ArtistList = (props: {
	artists: { name: string; id: string }[];
	handlePicks?: any;
}) => {
	return (
		<div className="artistList">
			{props.artists.map((artist: { name: string; id: string }) => {
				return (
					<Artist
						handlePicks={props.handlePicks}
						artist={artist}
						key={artist.id}
					/>
				);
			})}
		</div>
	);
};

export default ArtistList;
