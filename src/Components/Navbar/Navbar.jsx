import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Dokan from "../Dokan/Dokan";

let newKnownScrollPosition = 0;
let lastKnownScrollPosition = 0;

function Navbar() {
	const [hidden, setHidden] = useState(true);
	const [shadow, setShadow] = useState(false);
	const [menuMobile, setMenuMobile] = useState(false);

	function checkScroll() {
		newKnownScrollPosition = window.scrollY;

		if (lastKnownScrollPosition > newKnownScrollPosition) {
			setHidden(true);
			if (newKnownScrollPosition === 0) {
				setShadow(false);
			} else {
				setShadow(true);
			}
		} else {
			setHidden(false);
			setShadow(false);
		}
		lastKnownScrollPosition = newKnownScrollPosition;
	}
	useEffect(() => {
		window.addEventListener("scroll", checkScroll);
		return () => window.removeEventListener("scroll", checkScroll);
	}, []);

	return (
		<nav
			className="nav"
			style={{
				transform: `${hidden ? "translate(0,000%)" : "translate(0,-100%)"}`,
				boxShadow: `${shadow ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "none"}`,
			}}
		>
			<div className="nav-content">
				<Dokan />
				<ul className="menu">
					<li className="active">
						<Link to="/">خانه</Link>
					</li>
					<li>
						<Link to="/shopping">فروشگاه</Link>
					</li>
				</ul>
				<div className="user">user</div>
				<div className="menuMobile" onClick={() => setMenuMobile(!menuMobile)}>
					<span
						style={
							menuMobile ? { top: "50%", transform: "rotate(40deg)" } : null
						}
					></span>
					<span style={menuMobile ? { display: "none" } : null}></span>
					<span
						style={
							menuMobile ? { top: "50%", transform: "rotate(-40deg)" } : null
						}
					></span>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
