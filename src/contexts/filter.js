import { createContext, useContext, useEffect, useState } from "react";

const Filter = createContext([]);

export function useFilter() {
	return useContext(Filter);
}

export function FilterProvider({ children }) {
	const [allProducts, setAllProduct] = useState([]);
	const [category, setCategory] = useState([]);
	const [selectBrand, setSelectBrand] = useState([]);
	const [output, setOutput] = useState([]);
	const [minItems, setMinItems] = useState(0);
	const [maxItems, setMaxValItems] = useState(0);
	const [existence, seExistence] = useState();

	function setSearchItem(search) {
		let array = [];
		for (let i of allProducts) {
			const item = i.caption;
			if (item.indexOf(search) === -1) {
			} else {
				array.push(i);
			}
		}
		if (search) {
			setOutput(array);
		} else {
			setOutput([]);
		}
	}
	function selectCategory() {
		return category.filter((item) => item.checked === true);
	}
	function selectBrands() {
		return selectBrand.filter((brand) => {
			return brand.checked === true;
		});
	}

	const value = {
		setSearchItem,
		setAllProduct,
		setCategory,
		category,
		setSelectBrand,
		selectCategory,
		output,
		setMaxValItems,
		setMinItems,
		minItems,
		maxItems,
		selectBrands,
		seExistence,
		existence,
	};

	return <Filter.Provider value={value}>{children}</Filter.Provider>;
}
