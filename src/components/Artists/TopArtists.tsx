import React, { useEffect, useState } from "react";
import SpotifyUtils from "../../util/spotify";
import ArtistList from "./ArtistList";

const TopArtists = (props: { term: string; handlePicks: any }) => {
	const [topArtists, setTopArtists] = useState([]);
	const [term, setTerm] = useState("long-term");

	useEffect(() => {
		console.log("getting top artists");
		const getTopArtists = async () => {
			const artists = await SpotifyUtils.getTopArtists(props.term);

			setTopArtists(artists);
			setTerm(props.term);
		};
		if (!topArtists.length || term !== props.term) getTopArtists();
	}, [props.term]);

	return (
		<div id="my-top-tracks">
			<ArtistList handleClick={props.handlePicks} artists={topArtists} />
		</div>
	);
};

export default TopArtists;
