import React, { useEffect } from "react";
import { useState } from "react";
import {
	Category,
	Comments,
	Introduction,
	Invitation,
	Possibilities,
} from "../../HomeComponents";
import "./Home.css";

function Home() {
	const [items, setItems] = useState({});

	useEffect(() => {
		window.scrollTo({ top: "0", behavior: "smooth" });
	}, []);

	return (
		<>
			<Introduction />
			<Invitation />
			<Category />
			{/* <Possibilities /> */}
			<Comments />
		</>
	);
}

export default Home;
