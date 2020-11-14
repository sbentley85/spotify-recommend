import React, {useEffect, useState} from 'react';
import spotify from '../util/spotify';
import Track from './Track'


const TopTracks = () => {
	const [topTracks, setTopTracks] = useState([]);

	useEffect(()=> {
		const getTopTracks = async () => {
			const tracks = await spotify.getTopTracks()
			console.log(tracks)
			setTopTracks(tracks)
		}
		if(topTracks.length === 0) getTopTracks();

	})
	return (
		<div id="my-top-tracks">
			{topTracks.map((track: {id: string, name: string, artist: string}) => {
				return <Track track={track} key={track.id}/>
			})}
		</div>
	);
};

export default TopTracks;