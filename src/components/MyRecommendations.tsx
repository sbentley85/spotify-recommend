import React, { useState } from "react";
import TrackList from "./TrackList";
import { IPicks } from "./Choices";
import SavePlaylist from "./SavePlaylist/SavePlaylist";
import SpotifyPlayer from "./Player/SpotifyPlayer";

const MyRecommendations = (props: { tracks: IPicks[]; picks: IPicks[] }) => {
	const [selectedTrack, setSelectedTrack] = useState<IPicks>();
	const [selectedTrackIndex, setSelectedTrackIndex] = useState<number>(0);
	const trackClick = (event: any, track: IPicks) => {
		setSelectedTrack(track);
		const index = props.tracks.map((song) => song.uri).indexOf(track.uri);
		setSelectedTrackIndex(index);
	};
	return (
		<div id="my-recommendations">
			<SpotifyPlayer
				selectedTrack={selectedTrack}
				selectedTrackIndex={selectedTrackIndex}
				tracks={props.tracks}
			/>
			<TrackList tracks={props.tracks} handleClick={trackClick} />
			<SavePlaylist picks={props.picks} tracks={props.tracks} />
		</div>
	);
};

export default MyRecommendations;
