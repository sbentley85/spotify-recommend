import React, { SyntheticEvent, FormEvent, useEffect, useState } from "react";
import { CheckboxProps, DropdownProps, Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Spotify from "../../util/spotify";
import MyRecommendations from "../Recommendations/MyRecommendations";
import Picks from "./Picks";
import Settings from "../Selection/Settings";
import Selection from "../Selection/Selection";
import choicesStyles from "./choices.module.css";

const Choices = () => {
	const [selection, setSelection] = useState("top-artists");
	const [searchType, setSearchType] = useState("Artists");
	const [term, setTerm] = useState("long_term");
	const [picks, setPicks] = useState<Array<IPicks>>([]);
	const [recommendations, setRecommendations] = useState<Array<IPicks>>([]);

	const updateSelection = (event: SyntheticEvent, value: string) => {
		setSelection(value);
	};

	const updateTerm = (event: SyntheticEvent, term: string) => {
		// const termSelection: any = data.value;
		setTerm(term);
	};

	const updateSearchType = (
		event: FormEvent<HTMLInputElement>,
		data: CheckboxProps
	) => {
		setPicks([]);
		setRecommendations([]);
		if (data.checked) {
			setSearchType("Tracks");
			setSelection("top-tracks");
		} else {
			setSearchType("Artists");
			setSelection("top-artists");
		}
	};

	const handlePicks = (event: SyntheticEvent, choice: IPicks) => {
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
			<Grid stackable columns={1}>
				<Settings
					searchType={searchType}
					selection={selection}
					updateSelection={updateSelection}
					updateSearchType={updateSearchType}
				/>

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
						<MyRecommendations
							picks={picks}
							tracks={recommendations}
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</>
	);
};

// Interfaces

export interface IPickCallback {
	(event: SyntheticEvent, choice: IPicks): void;
}

export interface IDropdownCallback {
	(event: SyntheticEvent<HTMLElement>, data: DropdownProps): void;
}

export interface ISliderCallback {
	(event: FormEvent<HTMLInputElement>, data: CheckboxProps): void;
}

export interface IPicks {
	name: string;
	id: string;
	artist?: string;
	smImg: { height: number; width: number; url: string };
	medImg: { height: number; width: number; url: string };
	uri: string;
	liked?: boolean;
}

export interface IPlaylist {
	name: string;
	id: string;
	tracks?: IPicks[];
	img: { height: number; url: string; width: number };
	length: number;
}

export default Choices;
