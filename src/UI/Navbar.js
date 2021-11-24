import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../assets/img/logo.jpeg";
import Menu from "../assets/img/menu.svg";
import { scroller } from "react-scroll";

export const CustomNav = styled.nav`
	background: black;
	position: fixed;
	height: 80px;
	color: white;
	z-index: 12;
	width: 100%;
	display: flex;
	align-items: center;

	.menu {
		display: none;
		font-family: Montserrat;
		background-color: black;
		color: white;
		font-size: 14px;
		padding-right: 24px;
		padding-left: 12px;
		border-radius: 8px;
		position: absolute;
		right: 16px;
		top: 90px;
		@media (max-width: 550px) {
			display: block;
		}
	}

	.text-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 100%;
		margin: auto;
		padding-right: 32px;
		padding-left: 32px;

		.menu-button {
			opacity: 0.7;
			display: none;
			border: solid white 1px;
			padding-right: 8px;
			padding-left: 8px;
			padding-top: 4px;
			border-radius: 8px;

			img {
				height: 20px;
				width: 20px;
			}

			@media (max-width: 550px) {
				display: block;
			}
		}

		.link-container {
			display: flex;
			font-family: Montserrat;

			p {
				padding: 24px;
				cursor: pointer;
			}

			@media (max-width: 550px) {
				display: none;
			}
		}
	}

	img {
		height: 60px;
		object-fit: cover;
		cursor: pointer;
	}
`;

const Navbar = (props) => {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	const options = props.options.map((option) => (
		<p onClick={props.scroll.bind(null, option)}>{option}</p>
	));

	return (
		<CustomNav>
			<div className="text-container">
				<img
					src={Logo}
					alt=""
					onClick={props.scroll.bind(null, "Header")}
				></img>
				<div className="link-container">{options}</div>
				<div className="menu-button" onClick={toggleMenu}>
					<img src={Menu} alt=""></img>
				</div>
			</div>
			{showMenu && <div className="menu">{options}</div>}
		</CustomNav>
	);
};

export default Navbar;
