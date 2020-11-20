import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Spotify from "../util/spotify";
import MyRecommendations from "./MyRecommendations";
import Picks from "./Picks";
import Settings from "./Settings";
import Selection from "./Selection";

export interface IPicks {
	name: string;
	id: string;
	artist?: string;
	smImg: { height: number; width: number; url: string };
	medImg: { height: number; width: number; url: string };
}

export interface IPlaylist {
	name: string;
	id: string;
	tracks: IPicks[];
	img: {};
}

const Choices = (props: any) => {
	const [selection, setSelection] = useState("top-artists");
	const [searchType, setSearchType] = useState("Artists");
	const [term, setTerm] = useState("long_term");
	const [picks, setPicks] = useState<Array<IPicks>>([]);
	const [recommendations, setRecommendations] = useState([]);

	const updateSelection = (event: any, data: any) => {
		const choice = data.value;
		setSelection(choice);
	};

	const updateTerm = (event: any, data: any) => {
		const termSelection = data.value;
		setTerm(termSelection);
	};

	const updateSearchType = (event: any, data: any) => {
		setPicks([]);
		setRecommendations([]);
		if (event.target.checked) {
			setSearchType("Tracks");
			setSelection("top-tracks");
		} else {
			setSearchType("Artists");
			setSelection("top-artists");
		}
	};

	const handlePicks = (event: InputEvent, choice: IPicks) => {
		if (
			picks.filter((pick) => {
				return pick.id === choice.id;
			}).length !== 0
		) {
			removeFromPicks(choice);
		} else {
			addToPicks(choice);
		}
	};

	const addToPicks = (choice: IPicks) => {
		if (picks.length === 5) return;
		if (
			picks.filter((pick) => {
				return pick.id === choice.id;
			}).length !== 0
		) {
			return;
		}

		const newPicks = [...picks, choice];
		setPicks(newPicks);
	};

	const removeFromPicks = (choice: IPicks) => {
		const newPicks = picks.filter((pick) => {
			return pick.id !== choice.id;
		});
		setPicks(newPicks);
	};

	useEffect(() => {
		const getRecommendations = async () => {
			if (picks.length !== 0) {
				const recommendations = await Spotify.getRecommendations(
					picks,
					searchType
				);

				setRecommendations(recommendations);
			}
		};
		picks.length !== 0 ? getRecommendations() : setRecommendations([]);
	}, [picks, searchType]);

	return (
		<>
			<Grid.Row id="settings" columns={2}>
				<Settings
					searchType={searchType}
					selection={selection}
					updateSelection={updateSelection}
					updateSearchType={updateSearchType}
				/>
			</Grid.Row>
			<Grid.Row columns={2}>
				<Grid.Column>
					<Selection
						handlePicks={handlePicks}
						searchType={searchType}
						selection={selection}
						term={term}
						updateTerm={updateTerm}
					/>
				</Grid.Column>
				<Grid.Column>
					<Picks
						searchType={searchType}
						picks={picks}
						handlePicks={handlePicks}
					/>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row columns={1}>
				<Grid.Column>
					<MyRecommendations tracks={recommendations} />
				</Grid.Column>
			</Grid.Row>
		</>
	);
};

export default Choices;
