import React from "react";
import "./Information.css";
import free from "../../assets/image/free.png";
import location from "../../assets/image/location.png";
import { motion } from "framer-motion";
function Information() {
	return (
		<div className="product-information">
			<h2 className="title">ویولن کد W3</h2>
			<div className="property">
				<h3>رنگ ها</h3>
				<div className="colors">
					<div className="color" style={{ background: "rgb(255, 124, 124)" }} />
					<div className="color" style={{ background: "#222222" }} />
					<div className="color" style={{ background: "#b02709" }} />
				</div>
			</div>
			<div className="attributes">
				<h3>ویژگی ها</h3>
				<ul className="attributes-items">
					<li className="attributes-item">
						<span>نوع ساز : </span>
						<span>ویولن</span>
					</li>
					<li className="attributes-item">
						<span>سیستم صدا : </span>
						<span>آکوستیک</span>
					</li>
				</ul>
			</div>
			<div
				style={{ display: "flex", justifyContent: "center", marginTop: "80px" }}
			>
				<motion.div
					whileInView={{
						scale: [0.9, 1.1, 0.9],
						rotate: [0, -20, 20, 0],
					}}
					transition={{
						duration: 1.5,
						stiffness: 80,
					}}
					className="free-delivery free"
				>
					<span>ارسال رایگان</span>
					<img src={free} alt="free" />
				</motion.div>
				<motion.div
					whileInView={{
						scale: [0.9, 1.1, 0.9],
						rotate: [0, -20, 20, 0],
					}}
					transition={{
						duration: 1.5,
						stiffness: 80,
					}}
					className="free-delivery location"
				>
					<span>پرداخت در محل</span>
					<img src={location} alt="location" />
				</motion.div>
			</div>
		</div>
	);
}

export default Information;
