import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactInfo() {
	return (
		<div className="contactInfo">
			<h3 className="title">Contact Info</h3>
			<ul>
				<li>
					<span className="icon">
						<FontAwesomeIcon icon={["fas", "phone"]} />
					</span>
					<span className="text">651-336-9560</span>
				</li>

				<li>
					<span className="icon">
						<FontAwesomeIcon icon={["fas", "envelope"]} />
					</span>
					<span className="text">maxbdevelops@gmail.com</span>
				</li>

				<li>
					<span className="icon">
						<FontAwesomeIcon icon={["fas", "globe"]} />
					</span>
					<span className="text">
						<a
							href="https://maxburdette.netlify.app/"
							target="_blank"
							rel="noreferrer"
						>
							maxburdette.netlify.app
						</a>
					</span>
				</li>

				<li>
					<span className="icon">
						<FontAwesomeIcon icon={["fab", "linkedin"]} />
					</span>
					<span className="text">
						<a
							href="https://www.linkedin.com/in/maxwell-burdette-325432a6/"
							target="_blank"
							rel="noreferrer"
						>
							https://www.linkedin.com/in/maxwell-burdette-325432a6/
						</a>
					</span>
				</li>

				<li>
					<span className="icon">
						<FontAwesomeIcon icon={["fab", "github"]} />
					</span>
					<span className="text">
						<a
							href="https://github.com/maxwellburdette"
							target="_blank"
							rel="noreferrer"
						>
							https://github.com/maxwellburdette
						</a>
					</span>
				</li>

				<li>
					<span className="icon">
						<FontAwesomeIcon icon={["fas", "map-marker-alt"]} />
					</span>
					<span className="text">Shoreview, Minnesota 55126</span>
				</li>
			</ul>
		</div>
	);
}
