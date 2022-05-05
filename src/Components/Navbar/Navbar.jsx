import React from "react";
import "./Navbar.css";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="nav">
			<div className="nav-content">
				<div className="logo">
					<img src={logo} alt="دکان" />
					<span>دکان</span>
				</div>
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
