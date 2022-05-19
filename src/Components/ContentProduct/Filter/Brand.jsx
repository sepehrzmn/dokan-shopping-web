import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useShopping } from "../../../contexts/Shopping";
import { useEffect } from "react";
import { useFilter } from "../../../contexts/filter";
function Brand() {
	const [boxBrand, setBoxBrand] = useState(false);
	const [brand, setBrand] = useState([]);
	const { selectCategory } = useFilter();
	const { setSelectBrand } = useFilter();
	const { category } = useFilter();
	const data = useShopping();
	useEffect(() => {
		data &&
			setBrand(() => {
				return data.brand.map((item) => {
					return {
						...item,
						checked: false,
					};
				});
			});
	}, [data]);
	useEffect(() => {
		data &&
			setBrand(() => {
				const category = selectCategory();
				if (category.length) {
					const newBrand = category.map((category) => {
						const filter = data.brand.filter((brand) =>
							brand.indicators.includes(category.slug)
						);
						return [...filter];
					});
					const toto = [].concat.apply([], newBrand);
					return toto;

					// return category.map((category) => {
					// 	data.brand.filter((brand) => {
					// 		return category.indicator === category.slug;
					// 	});
					// });
				}
				return data.brand.map((item) => {
					return {
						...item,
						checked: false,
					};
				});
			});
	}, [category]);
	useEffect(() => {
		setSelectBrand(brand);
	}, [brand]);
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
				{brand &&
					brand.map((item, index) => (
						<label key={item.id} htmlFor={item.slug}>
							<input
								className="checkbox"
								type="checkbox"
								name={item.slug}
								id={item.slug}
								value={item.checked}
								onChange={() => {
									const newBrand = [...brand];
									newBrand[index] = { ...item, checked: !item.checked };
									setBrand(newBrand);
								}}
							/>
							<div className="brand__name">
								<span>{item.caption.fa}</span>
								<span>{item.caption.en}</span>
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
