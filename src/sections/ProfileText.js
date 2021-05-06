import React from "react";
import ProfilePic from "../graphics/profile.jpeg";

export default function ProfileText() {
	return (
		<div className="profileText">
			<div className="imgBox">
				<img src={ProfilePic} alt=""></img>
			</div>
			<h2>
				Maxwell Burdette
				<br />
				<span>Software Developer</span>
			</h2>
		</div>
	);
}
