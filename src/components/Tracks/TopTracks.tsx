import React, { useEffect, useState } from "react";
import SpotifyUtils from "../../util/spotify";
import TrackList from "./TrackList";

const TopTracks = (props: { term: string; handlePicks: any }) => {
	const [topTracks, setTopTracks] = useState([]);
	const [term, setTerm] = useState("long-term");

	useEffect(() => {
		const getTopTracks = async () => {
			const tracks = await SpotifyUtils.getTopTracks(props.term);

			setTopTracks(tracks);
			setTerm(props.term);
		};
		if (topTracks.length === 0 || term !== props.term) getTopTracks();
	}, [props.term]);
	return (
		<div id="my-top-tracks">
			<TrackList handleClick={props.handlePicks} tracks={topTracks} />
		</div>
	);
};

export default TopTracks;
