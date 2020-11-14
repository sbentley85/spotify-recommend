import React from 'react';

const Track = (props: {track :{id: string, name: string, artist: string}}) => {
	return (
		<div>
			{props.track.artist+' - '+props.track.name}
		</div>
	);
};

export default Track;