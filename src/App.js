import React from "react";
import "./App.css";
import { scroller } from "react-scroll";
import Header from "./components/Header";
import ServicesList from "./components/Services/ServicesList";
import ClaimsList from "./components/Claims/ClaimsList";
import Contact from "./components/Contact/Contact";
import About from "./components/About";
import Navbar from "./UI/Navbar";
import Footer from "./UI/Footer";

//ICONS
import FileClaim from "./assets/img/paper.png";
import Negotiation from "./assets/img/handshake.png";
import Damage from "./assets/img/damage.png";
import Insurance from "./assets/img/home-insurance.png";
import Representation from "./assets/img/representation.png";

//IMAGES
import Fire from "./assets/img/fire.jpg";
import AcLeak from "./assets/img/ac.jpg";
import Mold from "./assets/img/mold.jpg";
import RoofLeak from "./assets/img/roof-leak.jpg";
import Hurricane from "./assets/img/hurricane.jpg";
import PipeLeak from "./assets/img/pipe-leak.jpg";

//ABOUT US IMAGE
import AboutUsImage from "./assets/img/about-us.jpg";

//CONTACT ICONS
import Instagram from "./assets/img/instagram.svg";
import Phone from "./assets/img/telephone.svg";
import Email from "./assets/img/email.svg";

const headerInfo = {
	title: "Your home damage may be covered by your insurance.",
	subtitle: "Schedule a free consultation",
	button: "Schedule now",
};

const servicesInfo = {
	title: "Our services",
	subtitle:
		"We know that filing an insurance claim can be an overwhelming process. Furthermore, insurance policies are complex documents to understand as are the laws and regulations that govern the industry. We will work on your behalf taking you step by step through the entire claim process.",
	services: [
		{
			id: 1,
			icon: Insurance,
			text: "Insurance Policy Review",
		},
		{
			id: 2,
			icon: Damage,
			text: "Damage Assessment",
		},
		{
			id: 3,
			icon: FileClaim,
			text: "File Claim",
		},
		{
			id: 4,
			icon: Representation,
			text: "Full representation throughout the claim process",
		},
		{
			id: 5,
			icon: Negotiation,
			text: "Settlement Negotiation",
		},
	],
};

const claimsInfo = {
	title: "We service all claims",
	claims: [
		{
			id: 1,
			image: Hurricane,
			text: "Hurricane / Tropical storm",
		},
		{
			id: 2,
			image: Fire,
			text: "Fire Damage",
		},
		{
			id: 3,
			image: Mold,
			text: "Mold Damage",
		},
		{
			id: 4,
			image: RoofLeak,
			text: "Roof Leak",
		},
		{
			id: 5,
			image: PipeLeak,
			text: "Plumbing Leaks",
		},
		{
			id: 6,
			image: AcLeak,
			text: "AC Leak",
		},
	],
};

const aboutUs = {
	title: "We represent you, not the insurance company",
	subtitle:
		"Your insurance has a professional adjuster working for them and you should too! Our Public Adjusters are state licensed professionals who will represent your best interest in the claim process. We will handle the entire claim process from beginning to end to help you get fair compensation for your damages.",
	image: AboutUsImage,
};

const contactInfo = {
	title: "CONTACT US",
	button: "SCHEDULE NOW",
};

const navbarOptions = ["Services", "About", "Claims", "Contact"];

const companyData = [
	{
		title: "Phone",
		details: "561-310-3652",
		icon: Phone
	},
	{
		title: "Email",
		details: "info@actionclaimspa.com",
		icon: Email
	},
	{
		title: "Instagram",
		details: "@actionclaims",
		icon: Instagram
	},
];

function App() {
	const scroll = (className) => {
		scroller.scrollTo(className, {
			duration: 800,
			delay: 0,
			smooth: "easeInOutQuart",
			offset: -80
		});
	};

	return (
		<React.Fragment>
			<Navbar scroll={scroll} options={navbarOptions} />
			<Header
				title={headerInfo.title}
				subtitle={headerInfo.subtitle}
				button={headerInfo.button}
				scroll={scroll}
			/>
			<ServicesList
				title={servicesInfo.title}
				subtitle={servicesInfo.subtitle}
				services={servicesInfo.services}
				className="Services"
			/>
			<About
				title={aboutUs.title}
				subtitle={aboutUs.subtitle}
				image={aboutUs.image}
				className="About"
			/>
			<ClaimsList
				title={claimsInfo.title}
				claims={claimsInfo.claims}
				className="Claims"
			/>
			<Contact
				title={contactInfo.title}
				button={contactInfo.button}
				companyData={companyData}
				className="Contact"
			/>
			<Footer />
		</React.Fragment>
	);
}

export default App;
