import ServiceItem from "./ServiceItem";
import Section from "../../UI/Section";

const ServicesList = (props) => {
	const services = props.services.map((service) => {
		return (
			<ServiceItem key={service.id} icon={service.icon} text={service.text} />
		);
	});

	return (
		<Section title={props.title} subtitle={props.subtitle} className={props.className}>
			{services}
		</Section>
	);
};

export default ServicesList;
