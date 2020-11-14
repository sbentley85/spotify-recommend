import React from 'react';

const Artist = (props: {artist: {name: string, id: string}}) => {
	return (
		<div>
			{props.artist.name}
		</div>
	);
};

export default Artist;