import React, {useEffect, useState} from 'react';
import spotify from '../util/spotify';
import Artist from './Artist'
import Playlist from './Playlist';


const TopArtists = () => {
	const [topArtists, setTopArtists] = useState([]);

	useEffect(()=> {
		const getTopArtists = async () => {
			const artists = await spotify.getTopArtists()
			console.log(artists)
			setTopArtists(artists)
		}
		if(topArtists.length === 0) getTopArtists();

	})
	return (
		<div id="my-top-tracks">
			{topArtists.map((artist: {name: string, id: string}) => {
				return <Artist artist={artist} key={artist.id}/>
			})}
		</div>
	);
};

export default TopArtists;