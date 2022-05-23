import { createContext, useContext, useEffect, useState } from "react";

const Products = createContext({});

export function useProduct() {
	return useContext(Products);
}

export function ProductProvider({ children, id }) {
	const [productItems, setProductItems] = useState(null);

	function getData() {
		fetch(`http://localhost:3001/products/${id}`)
			.then((res) => {
				res
					.json()
					.then((data) => {
						setProductItems(data);
					})
					.catch((er) => {
						console.error(er);
					});
			})
			.catch((er) => {
				console.error(er);
			});
	}
	useEffect(() => {
		getData();
	}, [id]);
	return <Products.Provider value={productItems}>{children}</Products.Provider>;
}
