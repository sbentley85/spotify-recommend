import React, { SyntheticEvent } from "react";
import { Menu, Icon } from "semantic-ui-react";
import menuStyles from "./menu.module.css";

const SelectionMenu = (props: {
	options: any[];
	selection: string;
	handleClick: (event: SyntheticEvent, value: string) => void;
}) => {
	return (
		<Menu inverted secondary icon className={menuStyles.menu}>
			{props.options.map((option) => {
				return (
					<Menu.Item
						name={option.text}
						active={props.selection === option.value}
						onClick={(event) =>
							props.handleClick(event, option.value)
						}
					>
						<Icon
							name={option.icon}
							className={menuStyles.menuIcon}
						/>
						{option.text}
					</Menu.Item>
				);
			})}
		</Menu>
	);
};

export default SelectionMenu;
