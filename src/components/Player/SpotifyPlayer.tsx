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
	const [playing, setPlaying] = useState<boolean>(true);

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

	const play = () => {
		SpotifyPlayerUtils.play(
			props.tracks.map((track) => track.uri),
			deviceId
		);
		setPlaying(true);
	};

	const pause = () => {
		SpotifyPlayerUtils.pause();
	};

	const nextTrack = () => {
		SpotifyPlayerUtils.forward();
	};

	const previousTrack = () => {
		SpotifyPlayerUtils.back();
	};

	return (
		<div>
			<p>{player ? player!._options.name : "No player loaded"}</p>
			<Icon name="play" onClick={play} />
			<Icon name="pause" onClick={pause} />
			<Icon name="step backward" onClick={previousTrack} />
			<Icon name="step forward" onClick={nextTrack} />

			<div></div>
		</div>
	);
};

export default SpotifyPlayer;
