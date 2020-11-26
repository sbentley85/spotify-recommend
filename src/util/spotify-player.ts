import SpotifyUtils from "./spotify";

const SpotifyPlayerUtils = {
	addToQueue(uris: string[], device_id: string) {
		const accessToken = SpotifyUtils.getAccessToken();
		fetch(
			`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`,
			{
				method: "PUT",
				body: JSON.stringify({ uris: uris }),
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);
	},
};

export default SpotifyPlayerUtils;
