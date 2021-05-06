import React from "react";
import ProfileText from "./sections/ProfileText";
import ContactInfo from "./sections/ContactInfo";
import Education from "./sections/Education";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Interests from "./sections/Interests";

function App() {
	return (
		<div className="container">
			<div className="left_Side">
				<ProfileText />
				<ContactInfo />
				<Education />
			</div>
			<div className="right_Side">
				<About />
				<Experience />
				<Skills />
				<Interests />
			</div>
		</div>
	);
}

export default App;
