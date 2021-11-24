import styled from "styled-components";

const ClaimItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	padding: 8px 8px 32px 8px;
	box-shadow: solid black 1px;
	

	.label {
		background-color: white;
		color: black;
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		font-family: Montserrat;
		font-weight: bold;
	}

	img {
		width: 400px;
		height: 200px;
		object-fit: cover;
	}

	@media (max-width: 1200px) {
		img {
			width: 300px;
			height: 150px;
		}
	}
`;

const ClaimItem = (props) => {
	return (
		<ClaimItemContainer>
			<img src={props.image} alt=""></img>
			<span className="label">{props.text}</span>
		</ClaimItemContainer>
	);
};

export default ClaimItem;
