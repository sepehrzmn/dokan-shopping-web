import React, { useState } from "react";
import { motion } from "framer-motion";
import { useFilter } from "../../../contexts/filter";
import { useEffect } from "react";

function Available() {
	const [Available, setAvailable] = useState(false);
	const { seExistence } = useFilter();
	useEffect(() => {
		seExistence(Boolean(Available));
	}, [Available]);
	return (
		<motion.section className="FS-available">
			<div>فقط کالا های موجود</div>
			<motion.div
				className="toggle"
				animate={{
					background: Available ? "#ffa68d98" : "#ffffff",
				}}
				onClick={() => setAvailable(!Available)}
			>
				<motion.div
					className="boxBtn-toggle"
					initial={{
						left: "1px",
					}}
					animate={{
						left: Available ? "21px" : "1px",
					}}
					transition={{ type: "keyframes" }}
					style={{
						top: "15%",
						left: "1px",
					}}
				>
					<div className="btn-toggle" />
				</motion.div>
			</motion.div>
		</motion.section>
	);
}

export default Available;
