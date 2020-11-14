import React from 'react';
import Artist from './Artist'

const ArtistList = (props: {artists: {name: string, id: string}[]}) => {
	return (
		<div>
			{props.artists.map((artist: {name: string, id: string}) => {
				return <Artist artist={artist} key={artist.id}/>
			})}
		</div>
	);
};

export default ArtistList;