import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
function Brand() {
	const [boxBrand, setBoxBrand] = useState(false);
	return (
		<motion.section
			animate={{
				height: boxBrand ? "max-content" : "40px",
			}}
			className="FS-brand"
		>
			<motion.h3
				onClick={() => setBoxBrand(!boxBrand)}
				whileHover={{
					scale: 1.05,
				}}
			>
				<Icon icon="tabler:brand-airtable" fontSize={25} />
				<span>برند</span>
				<motion.div
					animate={{
						rotateZ: boxBrand ? 180 : 0,
					}}
				>
					<Icon
						icon="ep:arrow-down"
						style={{ marginTop: "5px", marginRight: "10px" }}
					/>
				</motion.div>
			</motion.h3>
			<form className="brand-form">
				{Array(16)
					.fill("")
					.map((item, index) => (
						<label key={index + 1} htmlFor="effect">
							<input
								className="checkbox"
								type="checkbox"
								name="effect"
								id="effect"
							/>
							<div className="brand__name">
								<span>یاماها</span>
								<span>Yamaha</span>
							</div>
						</label>
					))}
			</form>
		</motion.section>
	);
}

export default Brand;

//
//
// فندر
// Fender
// رود
// Rode
// سناتور
// Senator
// کاسیو
// Casio
// رولند
// Roland
// داداریو
// DAddario
// مکا
// Meka
// ریزر
// Razer
// هوهنر
// Hohner
// آلیس
// Alice
// هیوندای
