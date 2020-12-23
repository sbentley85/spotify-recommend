import React, { SyntheticEvent } from "react";
import { Menu } from "semantic-ui-react";

const SelectionMenu = (props: {
	options: any[];
	selection: string;
	handleClick: (event: SyntheticEvent, value: string) => void;
}) => {
	return (
		<Menu inverted secondary>
			{props.options.map((option) => {
				return (
					<Menu.Item
						name={option.text}
						active={props.selection === option.value}
						onClick={(event) =>
							props.handleClick(event, option.value)
						}
					/>
				);
			})}
		</Menu>
	);
};

export default SelectionMenu;
