import styled from "styled-components";
import ContactForm from "./ContactForm";
import React from "react";
import Background from "./../../assets/img/contact.png";

const ImageContainer = styled.div`
	display: flex;
	padding: 24px 48px;
	background-color: gray;
	.contact-container {
		padding: 24px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		.info-list {
			.info-container {
				display: flex;
				margin-bottom: 24px;

				img {
					width: 30px;
					height: 30px;
					margin-right: 20px;
				}

				.text-container {
					display: flex;
					flex-direction: column;
					.label {
						color: white;
						font-size: 24px;
						font-family: Montserrat-Demi;
					}

					.description {
						color: white;
						font-size: 20px;
						font-family: Montserrat;
					}
				}
			}
		}
	}

	@media (max-width: 900px) {
		padding: 8px 0px;
	}

	@media (max-width: 800px) {
		flex-direction: column;
		.info-container {
			flex-direction: column;
			align-items: center;
			margin-bottom: 42px !important;
			.text-container {
				align-items: center;
			}
			img {
				margin-right: 0px !important;
				margin-bottom: 12px;
			}
		}
	}
`;

const Contact = (props) => {
	const companyInfo = props.companyData.map((item) => {
		return (
			<div className="info-container">
				<img src={item.icon} alt=""></img>
				<div className="text-container">
					<span className="label">{item.title}</span>
					<span className="description">{item.details}</span>
				</div>
			</div>
		);
	});

	return (
		<div className={props.className}>
			<ImageContainer
			>
				<ContactForm />
				<div className="contact-container">
					<div className="info-list">{companyInfo}</div>
				</div>
			</ImageContainer>
		</div>
	);
};

export default Contact;
