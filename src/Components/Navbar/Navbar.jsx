import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Dokan from "../Dokan/Dokan";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useUser } from "../../contexts/user";
import { useCart } from "../../contexts/cart";
let newKnownScrollPosition = 0;
let lastKnownScrollPosition = 0;

function Navbar() {
	const [hidden, setHidden] = useState(true);
	const [shadow, setShadow] = useState(false);
	const [menuMobile, setMenuMobile] = useState(false);
	const { userInfo } = useUser();
	const { cartItems } = useCart();
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
					<li>
						<NavLink
							to="/"
							style={({ isActive }) => {
								return {
									borderBottom: isActive ? "2px solid #ffd500" : "",
								};
							}}
						>
							خانه
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/shopping"
							style={({ isActive }) => {
								return {
									borderBottom: isActive ? "2px solid #ffd500" : "",
								};
							}}
						>
							فروشگاه
						</NavLink>
					</li>
				</ul>

				{userInfo.length ? (
					<>
						<NavLink to={"/dashboard"}>
							<motion.div
								className="user"
								initial={{
									width: "40px",
								}}
								whileHover={{
									width: "max-content",
								}}
							>
								<div className="user-avatar">
									<img
										src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80"
										alt="user"
									/>

									{cartItems.length ? (
										<>
											<div className="badge">{cartItems.length}</div>
										</>
									) : (
										""
									)}
								</div>
								<span>{userInfo[0].userName}</span>
							</motion.div>
						</NavLink>
					</>
				) : (
					<>
						<NavLink to={"/sing-up"}>
							<motion.div
								className="user"
								initial={{
									width: "40px",
								}}
								whileHover={{
									width: "max-content",
								}}
							>
								<div className="user-avatar">
									<Icon
										icon="carbon:user-avatar-filled"
										fontSize={40}
										color="#bbbbbb"
									/>
								</div>
								<span>عضویت/ ورود</span>
							</motion.div>
						</NavLink>
					</>
				)}

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
				{menuMobile && (
					<motion.div
						onClick={() => {
							setMenuMobile(!menuMobile);
						}}
						className="bg-dark-menu"
						animate={{ opacity: 1, width: "100%", height: "100vh" }}
					/>
				)}
				{menuMobile && (
					<>
						<motion.ul
							className="ulMobile"
							animate={{ opacity: 1, width: "60vw", height: "40vh" }}
						>
							<li>
								<NavLink
									to="/"
									style={({ isActive }) => {
										return {
											borderBottom: isActive ? "2px solid #ffd500" : "",
										};
									}}
								>
									خانه
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/shopping"
									style={({ isActive }) => {
										return {
											borderBottom: isActive ? "2px solid #ffd500" : "",
										};
									}}
								>
									فروشگاه
								</NavLink>
							</li>
						</motion.ul>
					</>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
