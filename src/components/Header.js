import React from "react";
import styled from "styled-components";
import Video from "./../assets/header.mp4";
import Chevron from "../assets/img/down-chevron.svg";
import Button from "../UI/Button";
import { ReactVideo } from "reactjs-media";

const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: Montserrat;
	text-align: center;

	video {
		width: 60%;
		height: 100vh;
		object-fit: cover;
	}

	.video {
		display: none;
	}

	.details {
		height: 100vh;
		background-color: black;
		width: 40%;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-between;

		.text-container {
			margin-top: 80px;
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: center;
			height: 100%;
			padding: 0px 24px 0px 24px;
			.title {
				color: white;
				font-family: Montserrat-Demi;
				font-size: 42px;
				margin-bottom: 42px;
				max-width: 600px;
			}

			.subtitle {
				color: white;
				font-family: Montserrat;
				font-size: 22px;
				margin-bottom: 24px;
			}
		}

		img {
			width: 40px;
			height: 40px;
			margin-bottom: 48px;
			margin-top: 8px;
			cursor: pointer;
			padding: 8px;
		}

		img:hover {
			background-color: #222222;
			border-radius: 100%;
		}
	}

	@media (max-width: 1350px) {
		flex-direction: column;

		video {
			width: 100% !important;
			max-height: 60vh !important;
		}

		.details {
			width: 100% !important;
			max-height: 40vh !important;

			.text-container {
				margin-top: 12px !important;
				.title {
					font-size: 32px !important;
				}

				.subtitle {
					font-size: 18px !important;
				}
			}

			img {
				margin-bottom: 12px !important;
			}
		}
	}

	@media (max-width: 700px) {
		.details {
			.text-container {
				.title {
					margin-bottom: 8px;
					font-size: 18px !important;
				}

				.subtitle {
					font-size: 14px !important;
				}
			}
			img {
				width: 30px !important;
				height: 30px !important;
			}
		}
	}

	/* @media (max-width: 500px) {
		video {
			display: none;
		}

		.video {
			display: block;

			section {
				height: unset;
			}
			video {
				display: unset;
			}
		}
	} */
`;

const Header = (props) => {
	return (
		<HeaderContainer className="Header">
			<video playsInline className="videoTag" autoPlay loop muted>
				<source src={Video} type="video/mp4" />
			</video>
			<div className="video">
				<ReactVideo
					playsInline
					autoPlay={true}
					src={Video}
					// other props
				/>
			</div>
			<div className="details">
				<div className="text-container">
					<span className="title">{props.title}</span>
					<span className="subtitle">{props.subtitle}</span>
					<Button
						button={props.button}
						showButton={true}
						clickHandler={props.scroll.bind(null, "Contact")}
					></Button>
				</div>
				<img
					src={Chevron}
					alt=""
					onClick={props.scroll.bind(null, "Services")}
				></img>
			</div>
		</HeaderContainer>
	);
};

export default Header;
