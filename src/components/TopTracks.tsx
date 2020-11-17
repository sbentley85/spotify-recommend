import React, { useEffect, useState } from "react";
import spotify from "../util/spotify";
import TrackList from "./TrackList";

const TopTracks = (props: { term: string; addToPicks: any }) => {
	const [topTracks, setTopTracks] = useState([]);
	const [term, setTerm] = useState("long-term");

	useEffect(() => {
		const getTopTracks = async () => {
			const tracks = await spotify.getTopTracks(props.term);

			setTopTracks(tracks);
			setTerm(props.term);
		};
		if (topTracks.length === 0 || term !== props.term) getTopTracks();
	});
	return (
		<div id="my-top-tracks">
			<TrackList addToPicks={props.addToPicks} tracks={topTracks} />
		</div>
	);
};

export default TopTracks;
