import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useShopping } from "../../../contexts/Shopping";
import { useEffect } from "react";
import { useFilter } from "../../../contexts/filter";
function Category() {
	const [boxCategory, setBoxCategory] = useState(false);
	const [value, setValue] = useState([]);
	const { setCategory } = useFilter();

	const data = useShopping();

	useEffect(() => {
		data &&
			setValue(() => {
				return data.category.map((item) => {
					return {
						name: item.caption,
						id: item.id,
						checked: false,
						slug: item.slug,
					};
				});
			});
	}, [data]);
	useEffect(() => {
		setCategory(value);
	}, [value]);

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
				{value.map((item, index) => {
					return (
						<label key={index + 1} htmlFor={item.slug}>
							<input
								className="checkbox"
								type="checkbox"
								name={item.slug}
								id={item.id}
								checked={item.checked}
								onChange={() => {
									return setValue((prevent) => {
										const newValue = [...prevent];
										newValue[index] = { ...item, checked: !item.checked };
										return newValue;
									});
								}}
							/>
							{item.name}
						</label>
					);
				})}
			</form>
		</motion.section>
	);
}

export default Category;
