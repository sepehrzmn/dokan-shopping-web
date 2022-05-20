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

	useEffect(() => {
		checkedCategory();
	}, [category]);
	useEffect(() => {
		checkedBrand();
	}, [selectBrand]);
	function setSearchItem(search) {
		let array = [];
		for (let i of allProducts) {
			const item = i.caption;
			if (item.indexOf(search) === -1) {
			} else {
				array.push(i);
			}
		}
		setOutput(array);
	}
	function selectCategory() {
		return category.filter((item) => item.checked === true);
	}
	function checkedCategory() {
		const selected = selectCategory();
		if (selected.length) {
			if (output.length) {
				const productBySelected = selected.map((category) => {
					const newProduct = output.filter((product) => {
						return product.category === category.slug;
					});
					return [...newProduct];
				});
				const toto = [].concat.apply([], productBySelected);
				setOutput(toto);
			} else {
				const productBySelected = selected.map((category) => {
					const newProduct = allProducts.filter((product) => {
						return product.category === category.slug;
					});
					return [...newProduct];
				});
				const toto = [].concat.apply([], productBySelected);
				setOutput(toto);
			}
		} else {
			setOutput([]);
		}
	}
	function checkedBrand() {
		const selected = selectBrand.filter((brand) => {
			return brand.checked === true;
		});
		const select = selectCategory();
		if (selected.length) {
			if (select.length) {
				const productBySelected = selected.map((brand) => {
					const newProduct = output.filter((product) => {
						return product.brand.en.toString() === brand.caption.en.toString();
					});
					return [...newProduct];
				});
				const toto = [].concat.apply([], productBySelected);
				setOutput(toto);
			} else {
				const productBySelected = selected.map((brand) => {
					const newProduct = allProducts.filter((product) => {
						return product.brand.en.toString() === brand.caption.en.toString();
					});
					return [...newProduct];
				});
				const toto = [].concat.apply([], productBySelected);
				setOutput(toto);
			}
		}
	}
	function checkedProduct(bool) {
		if (bool) {
			let range = [];
			if (output.length) {
				console.log(0);
				range = output.filter((product) => {
					return product.count.length !== 0;
				});
			} else {
				console.log(1);

				range = allProducts.filter((product) => {
					return product.count.length !== 0;
				});
			}
			setOutput(range);
		} else {
			selectCategory();
			checkedCategory();
			checkedBrand();
		}
	}

	const value = {
		setSearchItem,
		setAllProduct,
		setCategory,
		category,
		setSelectBrand,
		selectCategory,
		checkedProduct,
		output,
		setMaxValItems,
		setMinItems,
		minItems,
		MaxItems,
	};

	return <Filter.Provider value={value}>{children}</Filter.Provider>;
}
