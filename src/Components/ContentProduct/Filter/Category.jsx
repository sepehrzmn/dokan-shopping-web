import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
function Category() {
	const [boxCategory, setBoxCategory] = useState(false);
	const listItems = [
		"ساز افکتی",
		"ساز بادی",
		"ساز کوبه ای",
		"ساز دهنی",
		"ساز کلید دار",
		"ساز زهی",
		"ساز الکترونیک",
	];
	return (
		<motion.section
			className="FS-category"
			animate={{
				height: boxCategory ? "max-content" : "40px",
			}}
		>
			<motion.h3
				onClick={() => setBoxCategory(!boxCategory)}
				whileHover={{
					scale: 1.05,
				}}
			>
				<Icon icon="bx:category-alt" fontSize={25} />
				<span>دسته بندی</span>
				<motion.div
					animate={{
						rotateZ: boxCategory ? 180 : 0,
					}}
				>
					<Icon
						icon="ep:arrow-down"
						style={{ marginTop: "5px", marginRight: "10px" }}
					/>
				</motion.div>
			</motion.h3>
			<form className="category-form">
				{listItems.map((item, index) => {
					return (
						<label key={index + 1} htmlFor={item}>
							<input
								className="checkbox"
								type="checkbox"
								name={item}
								id={item}
							/>
							{item}
						</label>
					);
				})}
			</form>
		</motion.section>
	);
}

export default Category;
