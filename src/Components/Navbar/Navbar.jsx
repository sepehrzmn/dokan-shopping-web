import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Dokan from "../Dokan/Dokan";

function Navbar() {
	return (
		<nav className="nav">
			<div className="nav-content">
				<Dokan />
				<ul className="menu">
					<li className="active">
						<Link to="/">خانه</Link>
					</li>
					<li>
						<Link to="/category">دسته بندی</Link>
					</li>
					<li>
						<Link to="/mag">وبلاگ</Link>
					</li>
				</ul>
				<div className="user">user</div>
			</div>
		</nav>
	);
}

export default Navbar;
