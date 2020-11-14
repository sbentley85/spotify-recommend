import React, {useEffect, useState} from 'react';
import spotify from '../util/spotify';
import ArtistList from './ArtistList'



const TopArtists = () => {
	const [topArtists, setTopArtists] = useState([]);

	useEffect(()=> {
		const getTopArtists = async () => {
			const artists = await spotify.getTopArtists()

			setTopArtists(artists)
		}
		if(topArtists.length === 0) getTopArtists();

	})
	return (
		<div id="my-top-tracks">
			<ArtistList artists={topArtists}/>
		</div>
	);
};

export default TopArtists;