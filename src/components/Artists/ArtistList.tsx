import React from "react";
import Artist from "./Artist";
import { IPicks, IPickCallback } from "../Choices/Choices";

import artistStyles from "../Tracks/tracks.module.css";

const ArtistList = (props: {
	artists: IPicks[];
	handleClick: IPickCallback;
}) => {
	return props.artists.length !== 0 ? (
		<div className={artistStyles.artistList}>
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
