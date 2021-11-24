import ClaimItem from "./ClaimItem";
import Section from "../../UI/Section";

const ClaimsList = (props) => {
	const claims = props.claims.map((claim) => {
		return <ClaimItem key={claim.id} image={claim.image} text={claim.text} />;
	});

	return (
		<Section title={props.title} subtitle={props.subtitle} className={props.className}>
			{claims}
		</Section>
	);
};

export default ClaimsList;
