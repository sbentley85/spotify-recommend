import { IPlaylist } from "../components/Choices";

let accessToken: string;
const clientId = "2605e63cad504fc6889cb31b91f1eff3";

const redirectUri =
	process.env.NODE_ENV === "production"
		? "https://spotify-recommend.netlify.app"
		: "http://localhost:3000";

document.body.onload = function () {
	if (document.getElementById("input") as HTMLInputElement) {
		if (!sessionStorage.getItem("searchTerm")) {
			(document.getElementById("input") as HTMLInputElement).value = "";
		} else {
			(document.getElementById(
				"input"
			) as HTMLInputElement).value = sessionStorage.getItem(
				"searchTerm"
			)!;
		}
	}
};

const Spotify = {
	getAccessToken() {
		if (accessToken) {
			return accessToken;
		}
		// check for access token match
		const accessTokenMatch = window.location.href.match(
			/access_token=([^&]*)/
		);
		const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

		if (accessTokenMatch && expiresInMatch) {
			accessToken = accessTokenMatch[1];
			const expiresIn = Number(expiresInMatch[1]);
			window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
			window.history.pushState("Access Token", "", "/");
			// Clears the parameters, allowing us to grab a new access token when it expires

			return accessToken;
		} else {
			const scopes =
				"playlist-modify-public user-library-read user-top-read";
			const accessUri = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=${encodeURIComponent(
				scopes
			)}&redirect_uri=${redirectUri}`;
			window.location.href = accessUri;
		}
	},

	searchTracks(term: string) {
		sessionStorage.setItem("searchTerm", term);
		const accessToken = Spotify.getAccessToken();

		let endpoint = `https://api.spotify.com/v1/search?type=track&q=${term}`;

		return fetch(endpoint, {
			headers: { Authorization: `Bearer ${accessToken}` },
		})
			.then((response) => {
				return response.json();
			})
			.then((jsonResponse) => {
				if (!jsonResponse.tracks) {
					return [];
				}

				return jsonResponse.tracks.items.map(
					(track: {
						id: number;
						name: string;
						artists: any;
						album: any;
						uri: any;
					}) => ({
						id: track.id,
						name: track.name,
						artist: track.artists[0].name,
						medImg: track.album.images[1],
						smImg: track.album.images[2],
					})
				);
			});
	},

	searchArtists(term: string) {
		sessionStorage.setItem("searchTerm", term);
		const accessToken = Spotify.getAccessToken();

		let endpoint = `https://api.spotify.com/v1/search?type=artist&q=${term}`;

		return fetch(endpoint, {
			headers: { Authorization: `Bearer ${accessToken}` },
		})
			.then((response) => {
				return response.json();
			})
			.then((jsonResponse) => {
				if (!jsonResponse.artists) {
					return [];
				}
				console.log(jsonResponse);
				return jsonResponse.artists.items.map((artist: any) => ({
					id: artist.id,
					name: artist.name,
					medImg: artist.images[1],
					smImg: artist.images[2],
				}));
			});
	},

	savePlaylist(name: string, trackUris: any) {
		if (!name || !trackUris.length) {
			return;
		}

		const accessToken = Spotify.getAccessToken();
		const headers = { Authorization: `Bearer ${accessToken}` };
		let userId;

		return fetch("https://api.spotify.com/v1/me", { headers: headers })
			.then((response) => response.json())
			.then((jsonResponse) => {
				userId = jsonResponse.id;

				return fetch(
					`https://api.spotify.com/v1/users/${userId}/playlists`,
					{
						headers: headers,
						method: "POST",
						body: JSON.stringify({ name: name }),
					}
				)
					.then((response) => response.json())
					.then((jsonResponse) => {
						const playlistId = jsonResponse.id;

						return fetch(
							`https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
							{
								headers: headers,
								method: "POST",
								body: JSON.stringify({ uris: trackUris }),
							}
						);
					});
			});
	},

	getTopTracks(term: string) {
		const accessToken = Spotify.getAccessToken();
		const headers = { Authorization: `Bearer ${accessToken}` };

		return fetch(
			`https://api.spotify.com/v1/me/top/tracks?time_range=${term}`,
			{ headers: headers }
		)
			.then((response) => response.json())
			.then((jsonResponse) => {
				return jsonResponse.items.map((track: any) => ({
					id: track.id,
					name: track.name,
					artist: track.artists[0].name,
					medImg: track.album.images[1],
					smImg: track.album.images[2],
				}));
			});
	},

	getTopArtists(term: string) {
		const accessToken = Spotify.getAccessToken();
		const headers = { Authorization: `Bearer ${accessToken}` };

		return fetch(
			`https://api.spotify.com/v1/me/top/artists?time_range=${term}`,
			{
				headers: headers,
			}
		)
			.then((response) => response.json())
			.then((jsonResponse) => {
				return jsonResponse.items.map((artist: any) => ({
					id: artist.id,
					name: artist.name,
					medImg: artist.images[1],
					smImg: artist.images[2],
				}));
			});
	},

	getPlaylists() {
		const accessToken = Spotify.getAccessToken();
		const headers = { Authorization: `Bearer ${accessToken}` };

		return fetch("https://api.spotify.com/v1/me/playlists?limit=50", {
			headers: headers,
		})
			.then((response) => response.json())
			.then((jsonResponse) => {
				console.log(jsonResponse);
				return jsonResponse.items.map(
					(playlist: {
						id: number;
						name: string;
						tracks: any;
						images: {}[];
					}) => ({
						id: playlist.id,
						name: playlist.name,
						length: playlist.tracks.total,
						img: playlist.images[2] || playlist.images[0],
					})
				);
			});
	},
	getPlaylistTracks(id: string) {
		const accessToken = Spotify.getAccessToken();
		const headers = { Authorization: `Bearer ${accessToken}` };

		return fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
			headers: headers,
		})
			.then((response) => response.json())
			.then((jsonResponse) => {
				return jsonResponse.items.map((track: any) => ({
					id: track.track.id,
					name: track.track.name,
					artist: track.track.artists[0].name,
					medImg: track.track.album.images[1],
					smImg: track.track.album.images[2],
				}));
			});
	},

	getRecommendations(picks: any, searchType: string) {
		// https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK
		const accessToken = Spotify.getAccessToken();
		const headers = { Authorization: `Bearer ${accessToken}` };
		const url = "https://api.spotify.com/v1/recommendations?";
		const option =
			searchType === "Artists" ? "seed_artists=" : "seed_tracks=";

		let seedList = "";
		picks.forEach((pick: any) => {
			seedList = seedList.concat(pick.id, ",");
		});
		seedList = seedList.slice(0, seedList.length - 1);

		return fetch(
			`https://api.spotify.com/v1/recommendations?${option}${seedList}`,
			{
				headers: headers,
			}
		)
			.then((response) => response.json())
			.then((jsonResponse) => {
				return jsonResponse.tracks.map((track: any) => ({
					id: track.id,
					name: track.name,
					artist: track.artists[0].name,
					medImg: track.album.images[1],
					smImg: track.album.images[2],
				}));
			});
	},
};

export default Spotify;
