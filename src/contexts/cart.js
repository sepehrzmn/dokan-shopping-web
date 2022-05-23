import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/LocalStorage";

const Cart = createContext([]);

export function useCart() {
	return useContext(Cart);
}

export function CartProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);
	const [cart, setCart] = useLocalStorage("cart");
	useEffect(() => {
		cart && setCartItems(cart);
	}, [cart]);

	function add(product) {
		setCart((prevent) => [...prevent, { ...product }]);
	}
	function deleteProduct(id) {
		setCart((prevent) => {
			const filter = prevent.filter((product) => {
				console.log("product", product.product_id);
				console.log("id", id);
				return +product.product_id !== +id;
			});
			return filter;
		});
	}

	const value = { add, cartItems, deleteProduct };
	return <Cart.Provider value={value}>{children}</Cart.Provider>;
}
