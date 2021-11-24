import React from "react";
import styled from "styled-components";

export const FooterContainer = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	font-family: Montserrat;

	.text-container {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
`;

const Footer = () => {
	return (
		<FooterContainer>
			<div className="text-container">
				<div>
					<p>Copyright © Action Claims 2021</p>
				</div>
			</div>
		</FooterContainer>
	);
};

export default Footer;
