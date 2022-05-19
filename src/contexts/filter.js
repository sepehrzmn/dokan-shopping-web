import { createContext, useContext, useEffect, useState } from "react";
import Brand from "../Components/ContentProduct/Filter/Brand";

const Filter = createContext([]);

export function useFilter() {
	return useContext(Filter);
}

export function FilterProvider({ children }) {
	const [allProducts, setAllProduct] = useState([]);
	const [search, setSearch] = useState("");
	const [category, setCategory] = useState([]);
	const [selectBrand, setSelectBrand] = useState([]);
	const [R_brand, setR_brand] = useState([]);
	const [R_category, setR_category] = useState([]);
	const [R_Range, setR_Range] = useState([]);
	const [R_Available, setR_Available] = useState([]);

	let F_search = [];
	for (let i of allProducts) {
		const item = i.caption;
		if (item.indexOf(search) === -1) {
		} else {
			F_search.push(i);
		}
	}

	useEffect(() => {
		checkedCategory();
	}, [category]);
	useEffect(() => {
		checkedBrand();
	}, [selectBrand]);
	function selectCategory() {
		return category.filter((item) => item.checked === true);
	}
	function checkedCategory() {
		const selected = selectCategory();
		if (selected.length) {
			const productBySelected = selected.map((category) => {
				const newProduct = allProducts.filter(
					(product) => product.category == category.slug
				);
				return [...newProduct];
			});
			const toto = [].concat.apply([], productBySelected);
			setR_category(toto);
			return;
		}
		setR_category([]);
	}
	function checkedBrand() {
		const selected = selectBrand.filter((brand) => {
			return brand.checked === true;
		});
		if (selected) {
			if (R_category.length) {
				const productBySelected = selected.map((brand) => {
					const newProduct = R_category.filter((product) => {
						return product.brand.en.toString() === brand.caption.en.toString();
					});
					return [...newProduct];
				});
				const toto = [].concat.apply([], productBySelected);
				setR_brand(toto);
			} else {
				const productBySelected = selected.map((brand) => {
					const newProduct = allProducts.filter((product) => {
						return product.brand.en.toString() === brand.caption.en.toString();
					});
					return [...newProduct];
				});
				const toto = [].concat.apply([], productBySelected);
				setR_brand(toto);
			}
		}
	}
	function checkedProduct(bool) {
		if (bool) {
			let range = [];
			if (R_category.length && R_brand.length == 0) {
				range = R_category.filter((product) => {
					return product.count.length !== 0;
				});
			} else if (R_brand.length) {
				console.log(1);
				range = R_brand.filter((product) => {
					return product.count.length !== 0;
				});
			} else {
				console.log(2);

				range = allProducts.filter((product) => {
					return product.count.length !== 0;
				});
			}
			setR_Available(range);
		} else {
			setR_Available([]);
		}
	}

	function calcRange(min, max) {
		let range = [];
		if (R_category.length && R_brand.length == 0) {
			console.log(0);

			range = R_category.filter((product) => {
				return min < product.price && max > product.price;
			});
		} else if (R_brand.length) {
			console.log(1);
			range = R_brand.filter((product) => {
				return min < product.price && max > product.price;
			});
		} else {
			console.log(2);

			range = allProducts.filter((product) => {
				return min < product.price && max > product.price;
			});
		}
		setR_Range(range);
	}

	const value = {
		search,
		setSearch,
		setAllProduct,
		F_search,
		setCategory,
		category,
		R_category,
		setSelectBrand,
		R_brand,
		selectCategory,
		calcRange,
		R_Range,
		checkedProduct,
		R_Available,
	};

	return <Filter.Provider value={value}>{children}</Filter.Provider>;
}
