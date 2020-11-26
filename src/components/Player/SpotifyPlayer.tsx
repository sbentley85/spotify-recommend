import React, { useState, useEffect } from "react";
import { Icon } from "semantic-ui-react";
import SpotifyUtils from "../../util/spotify";
import SpotifyPlayerUtils from "../../util/spotify-player";
import { IPicks } from "../Choices";
import Track from "../Track";

const SpotifyPlayer = (props: {
	tracks: IPicks[];
	selectedTrack?: IPicks;
	selectedTrackIndex: number;
}) => {
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
		// sets current track to first item in props.tracks for player to have track details
		setCurrentTrack(props.tracks[0]);
	}, [props.tracks]);

	useEffect(() => {
		// sends new set of tracks to queue when a recommended track is clicked
		console.log("setting new tracks");
		if (props.selectedTrack && deviceId && accessToken) {
			const uris = props.tracks.map((track) => track.uri);
			const newTracks = uris.slice(props.selectedTrackIndex);
			SpotifyPlayerUtils.addToQueue(newTracks, deviceId);
			setTracksAdded(true);
			setPlaying(true);
		}
	}, [props.selectedTrack, accessToken, deviceId, props.selectedTrackIndex]);

	useEffect(() => {
		// sends new set of tracks to queue when picks change
		console.log("picks change - setting new tracks");
		if (props.tracks.length && deviceId && accessToken) {
			SpotifyPlayerUtils.addToQueue(
				props.tracks.map((track) => track.uri),
				deviceId
			);
			setTracksAdded(true);
			setPlaying(true);
		}
	}, [props.tracks, accessToken, deviceId]);

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
						spotifyPlayer.getCurrentState().then((state: any) => {
							if (!state) {
								console.error(
									"User is not playing music through the Web Playback SDK"
								);
								return;
							}

							let {
								current_track,
								// next_tracks: [next_track],
							} = state.track_window;

							const nowPlaying: IPicks = {
								id: current_track.id,
								uri: current_track.uri,
								name: current_track.name,
								artist: current_track.artists[0].name,
								medImg: current_track.album.images[1],
								smImg: current_track.album.images[2],
							};
							setCurrentTrack(nowPlaying);
							setPlaying(!state.paused);
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

	// const getPlayStatus = () => {
	// 	player.getCurrentState().then((state: any) => {
	// 		setPlaying(state.paused);
	// 	});
	// };

	const togglePlay = () => {
		if (tracksAdded) player.togglePlay();
		else {
			if (deviceId && accessToken) {
				SpotifyPlayerUtils.addToQueue(
					props.tracks.map((track) => track.uri),
					deviceId
				);
				setTracksAdded(true);
				setPlaying(true);
			}
		}
	};

	const nextTrack = () => {
		player.nextTrack();
	};

	const previousTrack = () => {
		player.previousTrack();
	};

	return props.tracks.length ? (
		<div id="playerContainer">
			<div id="player">
				{currentTrack ? (
					<Track track={currentTrack} handleClick={togglePlay} />
				) : null}
				<div id="controls">
					<Icon
						name="step backward"
						className="playerControl"
						onClick={previousTrack}
					/>
					{playing ? (
						<Icon
							name="pause"
							className="playerControl"
							onClick={togglePlay}
						/>
					) : (
						<Icon
							name="play"
							className="playerControl"
							onClick={togglePlay}
						/>
					)}

					<Icon
						name="step forward"
						className="playerControl"
						onClick={nextTrack}
					/>
				</div>
			</div>
		</div>
	) : null;
};

export default SpotifyPlayer;
