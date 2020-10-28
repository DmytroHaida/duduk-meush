import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
const NavBarItem = (props) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<div>
			<Button  className={props.classes.button} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
				{props.buttonName}  <ArrowDropDownIcon />
			</Button>
			<Menu
				className={props.classes.menuListWrapper}
				id="simple-menu"
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleClose}
				getContentAnchorEl={null}
				transitionDuration={0}
				anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
				transformOrigin={{ vertical: "top", horizontal: "left" }}
			>
				{props.menuItemName.map(i => <MenuItem onClick={handleClose} key={i.name}>
					<NavLink to={i.navLinkTo}>{i.name}</NavLink>
				</MenuItem>)}
			</Menu>
		</div>
	);
}

export default NavBarItem;