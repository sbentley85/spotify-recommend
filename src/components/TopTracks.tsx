import React, {useEffect, useState} from 'react';
import spotify from '../util/spotify';
import TrackList from './TrackList'


const TopTracks = () => {
	const [topTracks, setTopTracks] = useState([]);

	useEffect(()=> {
		const getTopTracks = async () => {
			const tracks = await spotify.getTopTracks()

			setTopTracks(tracks)
		}
		if(topTracks.length === 0) getTopTracks();

	})
	return (
		<div id="my-top-tracks">
			<TrackList tracks={topTracks}/>
		</div>
	);
};

export default TopTracks;