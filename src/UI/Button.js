import styled from "styled-components";

const CustomButton = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	button {
		background-color: #ffc800;
		color: white;
		border: none;
		padding: 16px 24px;
		font-family: Montserrat;
		font-weight: bold;
		font-size: 15px;
		cursor: pointer;
	}

	.message {
		font-family: Montserrat;
		color: white;
		margin-bottom: 24px;
	}
`;

const Button = (props) => {
	return (
		<CustomButton>
		{props.message && <span className="message">{props.message}</span>}
			{props.showButton && (
				<button onClick={props.clickHandler}>{props.button}</button>
			)}
		</CustomButton>
	);
};

export default Button;
