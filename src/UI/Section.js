import styled from "styled-components";
import Background from "./../assets/img/contact.png";

const SectionContainer = styled.div`
	color: black;
	text-align: center;
	font-family: Montserrat;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 90px 8px 0px;
	background-color: white;

	&.dark {
		background-color: black;
		color: white;
		padding: 90px 8px 48px;
	}

	.text-container {
		max-width: 1400px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding-right: 12px;
		padding-left: 12px;
		width: 100%;

		.title-container {
			max-width: 750px;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			.title {
				font-size: 42px;
				padding-bottom: 16px;
				font-family: Montserrat-Bold;
				@media (max-width: 600px) {
					font-size: 32px;
				}
			}

			.subtitle {
				font-size: 22px;
				font-family: Montserrat;
				@media (max-width: 600px) {
					font-size: 18px;
				}
			}
		}

		.list {
			padding: 32px 0px 32px 0px;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			font-family: Montserrat-Demi;
			font-size: 18px;
		}
	}
`;

const Section = (props) => {
	return (
		<SectionContainer className={`${props.theme} ${props.className}`}>
			<div className="text-container">
				<div className="title-container">
					<span className="title">{props.title}</span>
					{props.subtitle && <span className="subtitle">{props.subtitle}</span>}
				</div>
				{props.children && <div className="list">{props.children}</div>}
			</div>
		</SectionContainer>
	);
};

export default Section;
