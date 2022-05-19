import { createContext, useContext, useEffect, useState } from "react";

const Shopping = createContext({});

export function useShopping() {
	return useContext(Shopping);
}

export function ShoppingProvider({ children }) {
	const [shoppingItems, setShoppingItems] = useState(null);

	function getData() {
		fetch("http://localhost:3001/ShopingItems")
			.then((res) => {
				res
					.json()
					.then((data) => {
						setShoppingItems(data);
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
	}, []);

	return (
		<Shopping.Provider value={shoppingItems}>{children}</Shopping.Provider>
	);
}
