import styled from "styled-components";
const ServiceItemContainer = styled.div`
	padding: 32px 12px;
	width: 240px;
	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		height: 70px;
		margin-bottom: 28px;
	}

	/* .icon-container {
		background-color: #ffc800;
		border-radius: 100%;
		height: 80px;
		width: 80px;
		margin: 24px;
		color: white;
	} */
`;

const ServiceItem = (props) => {


	return (
		<ServiceItemContainer>
			<img src={props.icon} alt=""></img>
			<span>{props.text}</span>
		</ServiceItemContainer>
	);
};

export default ServiceItem;
