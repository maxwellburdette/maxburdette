import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Interests() {
	return (
		<div className="about interest">
			<h2 className="title2">Interests</h2>
			<ul>
				<li>
					<FontAwesomeIcon className="icons" icon={["fas", "gamepad"]} />
					Gaming
				</li>
				<li>
					<FontAwesomeIcon className="icons" icon={["fas", "film"]} />
					Movies
				</li>
				<li>
					<FontAwesomeIcon className="icons" icon={["fas", "user-friends"]} />
					Socializing
				</li>
			</ul>
		</div>
	);
}
