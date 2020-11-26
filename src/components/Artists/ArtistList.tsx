import React from "react";
import Artist from "./Artist";
import { IPicks } from "../Choices/Choices";

const ArtistList = (props: { artists: IPicks[]; handleClick?: any }) => {
	return props.artists.length !== 0 ? (
		<div className="artistList">
			{props.artists.map((artist: IPicks) => {
				return (
					<Artist
						handleClick={props.handleClick}
						artist={artist}
						key={artist.id}
					/>
				);
			})}
		</div>
	) : null;
};

export default ArtistList;
