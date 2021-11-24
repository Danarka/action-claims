import styled from "styled-components";
import Button from "../../UI/Button";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactContainer = styled.form`
	background-color: transparent;
	margin: 24px 48px;
	padding: 24px;
	text-align: center;

	.title {
		font-size: 42px;
		color: white;
		padding-bottom: 16px;
		font-family: Montserrat-Bold;
		@media (max-width: 600px) {
			font-size: 32px;
		}
	}

	.form-content {
		display: flex;
		margin: 24px 0px;
		align-items: flex-start;
		justify-content: center;

		.success-message {
			color: white;
			font-family: Montserrat !important;
			font-size: 14px;
		}

		.errorMessage {
			color: rgb(193, 53, 21);
			font-family: Montserrat;
			font-size: 14px;
			padding-bottom: 12px;
			text-align: left;
			padding-left: 4px;
			display: block;
			color: white;
		}

		.client {
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 12px;
			width: 100%;

			input {
				margin-bottom: 12px;
				height: 46px;
				width: 400px;
				padding: 8px;
				font-family: Montserrat;
				font-size: 16px;
			}
			.error {
				border-color: red;
			}
		}

		.message {
			padding: 12px;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;

			textarea {
				width: 400px;
				font-family: Montserrat;
				font-size: 16px;
				height: 162px;
				padding: 8px;
				margin-bottom: 4px;
			}
			.error {
				border-color: red;
			}
		}
	}

	@media (max-width: 1400px) {
		.form-content {
			flex-direction: column;
			.client {
				input {
					width: unset;
					font-size: 16px;
					min-width: 300px;
				}
			}
			.message {
				padding: 0px 12px;
				textarea {
					width: unset;
					min-width: 300px;
					font-size: 16px;
				}
			}
		}
	}

	@media (max-width: 700px) {
		margin: 12px 12px;
		padding: 24px 12px;
		.form-content {
			.client {
				margin-bottom: 0px;
				input {
					width: 100%;
					font-size: 14px;
				}
			}
			.message {
				margin-bottom: 0px;
				margin-top: 0px;
				textarea {
					font-size: 14px;
				}
			}
		}
	}
`;

const SERVICE_ID = "gmail_service";
const USER_ID = "user_4eOA8AXxmZyiiapNrNEsv";
const TEMPLATE_ID = "action-claims-template";
const ERROR_MESSAGE =
	"There was an error sending the message. Please try again.";
const SUCCESS_MESSAGE = "Message sent successfully!";

const ContactForm = (props) => {
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [name, setname] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [phoneTouched, setPhoneTouched] = useState(false);
	const [emailTouched, setEmailTouched] = useState(false);
	const [messageTouched, setMessageTouched] = useState(false);
	const [submitMessage, setSubmitMessage] = useState("");
	const phoneValid = phone.trim() !== "";
	const emailValid = email.trim() !== "";
	const messageValid = message.trim() !== "";

	const validForm = phoneValid && emailValid && messageValid;

	const handlename = (event) => {
		setname(event.target.value);
	};

	const handlePhone = (event) => {
		setPhone(event.target.value);
		setPhoneTouched(false);
	};

	const blurPhone = () => {
		setPhoneTouched(true);
	};

	const handleEmail = (event) => {
		setEmail(event.target.value);
		setEmailTouched(false);
	};

	const blurEmail = () => {
		setEmailTouched(true);
	};

	const handleMessage = (event) => {
		setMessage(event.target.value);
		setMessageTouched(false);
	};

	const blurMessage = () => {
		setMessageTouched(true);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		if (!validForm) {
			setPhoneTouched(true);
			setEmailTouched(true);
			setMessageTouched(true);
		} else {
			emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target, USER_ID).then(
				(result) => {
					setSubmitMessage(SUCCESS_MESSAGE);
					setFormSubmitted(true);
				},
				(error) => {
					setSubmitMessage(ERROR_MESSAGE);
				}
			);
		}
	};

	return (
		<ContactContainer onSubmit={submitHandler}>
			<span className="title">Contact Us</span>
			<div className="form-content">
				<div className="client">
					<input
						name="name"
						type="text"
						onChange={handlename}
						placeholder="Your name"
					></input>
					<input
						name="phone"
						type="tel"
						onChange={handlePhone}
						placeholder="Your phone *"
						className={!phoneValid && phoneTouched ? "error" : ""}
						onBlur={blurPhone}
					></input>
					{!phoneValid && phoneTouched && (
						<span className="errorMessage">A phone is required.</span>
					)}
					<input
						name="email"
						type="email"
						onChange={handleEmail}
						placeholder="Your email *"
						className={!emailValid && emailTouched ? "error" : ""}
						onBlur={blurEmail}
					></input>
					{!emailValid && emailTouched && (
						<span className="errorMessage">An email is required.</span>
					)}
				</div>
				<div className="message">
					<textarea
						name="message"
						type="text"
						onChange={handleMessage}
						placeholder="Your message *"
						className={!messageValid && messageTouched ? "error" : ""}
						onBlur={blurMessage}
					></textarea>
					{!messageValid && messageTouched && (
						<span className="errorMessage">A message is required.</span>
					)}
				</div>
			</div>
			<div className="button-container">
				<Button
					type="submit"
					button="Send message"
					message={submitMessage}
					showButton={!formSubmitted}
				/>
			</div>
		</ContactContainer>
	);
};

export default ContactForm;
