import React from "react";
import TrackList from "../Tracks/TrackList";
import Track from "../Tracks/Track";
import Artist from "../Artists/Artist";
import ArtistList from "../Artists/ArtistList";
import { IPicks, IPickCallback } from "./Choices";
import choicesStyles from "./choices.module.css";

const Picks = (props: {
	picks: IPicks[];
	searchType: string;
	handlePicks: IPickCallback;
}) => {
	return (
		<div className={choicesStyles.picks}>
			{/* {props.searchType === "Artists" ? (
				<ArtistList
					handleClick={props.handlePicks}
					artists={props.picks}
				/>
			) : (
				<></>
			)}
			{props.searchType === "Tracks" ? (
				<TrackList
					handleClick={props.handlePicks}
					tracks={props.picks}
				/>
			) : (
				<></>
			)} */}
			{props.searchType === "Artists"
				? props.picks.map((pick) => {
						return (
							<div className={choicesStyles.pick}>
								<Artist
									handleClick={props.handlePicks}
									artist={pick}
								/>
							</div>
						);
				  })
				: props.picks.map((pick) => {
						return (
							<div className={choicesStyles.pick}>
								<Track
									handleClick={props.handlePicks}
									track={pick}
								/>
							</div>
						);
				  })}
		</div>
	);
};

export default Picks;
