import SpotifyUtils from "./spotify";

const SpotifyPlayerUtils = {
	play(uris: string[], device_id: string) {
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

	pause() {
		console.log("pausing playback");
	},

	forward() {
		console.log("forward");
	},

	back() {
		console.log("back");
	},
};

export default SpotifyPlayerUtils;
