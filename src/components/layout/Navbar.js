import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLink from "./SignedOutLink";

export default function Navbar() {
	return (
		<nav className="nav-wrapper grey darken-3">
			<div className="container">
				<Link to="/" className="brand-logo">
					Mario Plan
				</Link>
				<SignedInLinks />
				<SignedOutLink />
			</div>
		</nav>
	);
}
