import React, { useEffect } from "react";
import {
	Category,
	Comments,
	Introduction,
	Invitation,
	Possibilities,
} from "../../HomeComponents";
import "./Home.css";

function Home() {
	useEffect(() => {
		window.scrollTo({ top: "0", behavior: "smooth" });
	}, []);
	return (
		<>
			<div className="toolbar" />
			<Introduction />
			<Invitation />
			<Category />
			<Possibilities />
			<Comments />
		</>
	);
}

export default Home;
