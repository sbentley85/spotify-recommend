import React, { useState, useEffect } from "react";
import { Icon } from "semantic-ui-react";
import SpotifyUtils from "../../util/spotify";
import SpotifyPlayerUtils from "../../util/spotify-player";
import { IPicks } from "../Choices";

const SpotifyPlayer = (props: { tracks: IPicks[] }) => {
	const [accessToken, setAccessToken] = useState("");
	const [player, setPlayer] = useState<any>(null);
	const [scriptsLoaded, setScriptsLoaded] = useState(false);
	const [deviceId, setDeviceId] = useState<string>("");
	const [tracksAdded, setTracksAdded] = useState<boolean>(false);
	const [playing, setPlaying] = useState<boolean>(false);
	const [currentTrack, setCurrentTrack] = useState<IPicks>(props.tracks[0]);

	useEffect(() => {
		setAccessToken(SpotifyUtils.getAccessToken());
	}, []);

	useEffect(() => {
		// loads spotify script from cdn
		const loadScripts = async () => {
			console.log("loading scripts");
			const script = document.createElement("script");
			script.src = "https://sdk.scdn.co/spotify-player.js";
			script.async = true;
			script.onload = () => setScriptsLoaded(true);

			await document.body.appendChild(script);
		};
		loadScripts();
	}, []);

	useEffect(() => {
		// sets up player once scripts are loaded and access token is set
		if (scriptsLoaded && accessToken) createPlayer();
	}, [scriptsLoaded, accessToken]);

	useEffect(() => {
		if (deviceId && accessToken) {
			SpotifyPlayerUtils.addToQueue(
				props.tracks.map((track) => track.uri),
				deviceId
			);
			setTracksAdded(true);
			setPlaying(true);
		}
	}, [props.tracks]);

	const createPlayer = () => {
		if (!player && scriptsLoaded && accessToken) {
			console.log("setting up player");
			// @ts-ignore
			window.onSpotifyWebPlaybackSDKReady = () => {
				const token = accessToken;
				// @ts-ignore
				const spotifyPlayer = new Spotify.Player({
					name: "Spotify Recommend Player",
					// @ts-ignore

					getOAuthToken: (cb) => {
						cb(token);
					},
				});

				interface ErrorInterface {
					message: string;
				}

				interface DeviceInterface {
					device_id: string;
				}

				// Error handling
				spotifyPlayer.addListener(
					"initialization_error",
					({ message }: ErrorInterface) => {
						console.error(message);
					}
				);
				spotifyPlayer.addListener(
					"authentication_error",
					({ message }: ErrorInterface) => {
						console.error(message);
					}
				);
				spotifyPlayer.addListener(
					"account_error",
					({ message }: ErrorInterface) => {
						console.error(message);
					}
				);
				spotifyPlayer.addListener(
					"playback_error",
					({ message }: ErrorInterface) => {
						console.error(message);
					}
				);

				// Playback status updates
				spotifyPlayer.addListener(
					"player_state_changed",
					(state: string) => {
						console.log(state);
						spotifyPlayer.getCurrentState().then((state: any) => {
							if (!state) {
								console.error(
									"User is not playing music through the Web Playback SDK"
								);
								return;
							}

							let {
								current_track,
								next_tracks: [next_track],
							} = state.track_window;

							console.log("Currently Playing", current_track);

							const nowPlaying: IPicks = {
								id: current_track.id,
								uri: current_track.uri,
								name: current_track.name,
								artist: current_track.artists[0].name,
								medImg: current_track.album.images[1],
								smImg: current_track.album.images[2],
							};
							setCurrentTrack(nowPlaying);

							console.log("Playing Next", next_track);
						});
					}
				);

				// Ready
				spotifyPlayer.addListener(
					"ready",
					({ device_id }: DeviceInterface) => {
						console.log("Ready with Device ID", device_id);
						setDeviceId(device_id);
					}
				);

				// Not Ready
				spotifyPlayer.addListener(
					"not_ready",
					({ device_id }: DeviceInterface) => {
						console.log("Device ID has gone offline", device_id);
					}
				);

				// Connect to the player!
				spotifyPlayer.connect();

				setPlayer(spotifyPlayer);
			};
		}
	};

	const togglePlay = () => {
		player.togglePlay();
		setPlaying(!playing);
	};

	const nextTrack = () => {
		player.nextTrack();
	};

	const previousTrack = () => {
		player.previousTrack();
	};

	return (
		<div>
			<p>{player ? player!._options.name : "No player loaded"}</p>
			<p>{currentTrack ? currentTrack.name : null}</p>
			{playing ? (
				<Icon name="pause" onClick={togglePlay} />
			) : (
				<Icon name="play" onClick={togglePlay} />
			)}

			<Icon name="step backward" onClick={previousTrack} />
			<Icon name="step forward" onClick={nextTrack} />

			<div></div>
		</div>
	);
};

export default SpotifyPlayer;
