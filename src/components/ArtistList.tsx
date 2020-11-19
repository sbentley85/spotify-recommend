import React from "react";
import Artist from "./Artist";
import { IPicks } from "./Choices";

const ArtistList = (props: { artists: IPicks[]; handlePicks?: any }) => {
	return (
		<div className="artistList">
			{props.artists.map((artist: IPicks) => {
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
