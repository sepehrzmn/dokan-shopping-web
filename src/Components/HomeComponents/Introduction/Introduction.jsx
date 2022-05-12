import React, { useEffect, useState } from "react";
import "./Introduction.css";
import setar from "../../../assets/image/setar.png";
import vector1 from "../../../assets/image/Vector1.png";
import vector2 from "../../../assets/image/Vector2.png";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

function Introduction() {
	const [scroll, setScroll] = useState(false);

	function checkScroll() {
		setScroll(() => {
			if (window.scrollY === 0) {
				return true;
			}
			return false;
		});
	}
	useEffect(() => {
		window.addEventListener("scroll", checkScroll);
		return () => window.removeEventListener("scroll", checkScroll);
	}, []);

	return (
		<>
			<div className="introduction">
				<div className="intro-right">
					<div className="persian-music">
						<span> زِ رَعدِ آسْمان بِشْنو تو آوازِ دُهُل یعنی</span>
						<span>
							{" "}
							عروسی دارد این عالَم که بُستان پُرجَهیز آمد یا می‌گوید:
						</span>
					</div>
					<div className="persian-music">
						<span> باغْبانا رَعدْ مُطرب ابرْ ساقی گشت و شُد</span>
						<span> باغْ مَست و راغْ مَست و غُنچه مَست و خارْ مَست</span>
					</div>
					<div>
						<span>حافظ</span>
					</div>
				</div>
				<div className="intro-left">
					<motion.img
						whileInView={{
							rotate: [5, -5, 5],
							scale:
								window.screen.width > 750 ? [0.7, 0.85, 0.7] : [0.5, 0.6, 0.5],
						}}
						transition={{
							type: "spring",
							duration: 3,
							stiffness: 10,
							repeat: Infinity,
						}}
						src={setar}
						alt="setar"
					/>

					<img src={vector1} alt="vector" />
					<img src={vector2} alt="vector" />

					<motion.div
						whileInView={{
							rotate: [0, 20, -20, 0],
							opacity: [0, 1, 0],
							y: [100, -100],
						}}
						transition={{
							type: "spring",
							duration: 3,
							stiffness: 10,
							repeat: Infinity,
						}}
					>
						<Icon
							icon="clarity:music-note-solid"
							color="#ffe50b"
							fontSize={50}
						/>
					</motion.div>
					<motion.div
						whileInView={{
							rotate: [0, 20, -20, 0],
							opacity: [0, 1, 0],
							y: [100, -100],
						}}
						transition={{
							type: "spring",
							duration: 3,
							delay: 0.7,
							stiffness: 10,
							repeat: Infinity,
						}}
					>
						<Icon icon="el:music" color="#ffe50b" fontSize={50} />
					</motion.div>
					<motion.div
						whileInView={{
							rotate: [0, 20, -20, 0],
							opacity: [0, 1, 0],
							y: [100, -100],
						}}
						transition={{
							type: "spring",
							duration: 3,
							delay: 0.2,
							stiffness: 10,
							repeat: Infinity,
						}}
					>
						<Icon
							icon="clarity:music-note-solid"
							color="#ffe50b"
							fontSize={50}
						/>
					</motion.div>
				</div>
				<div className="int-scroll">
					{scroll && (
						<Icon
							icon="iconoir:mouse-scroll-wheel"
							fontSize={40}
							color="#d2b525"
						/>
					)}
				</div>
			</div>
		</>
	);
}

export default Introduction;
