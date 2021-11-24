import React from "react";
import Section from "../UI/Section";
import styled from "styled-components";

const AboutContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding-top: 48px;

	img {
		max-width: 1300px;
		width: 100vw;
		height: 400px;
		object-fit: cover;
	}
`;

const About = (props) => {
	return (
		<AboutContainer>
			<img src={props.image} alt="" className={props.className}></img>
			<Section title={props.title} subtitle={props.subtitle} />
		</AboutContainer>
	);
};

export default About;
