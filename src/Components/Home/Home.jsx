import React from "react";
import CategoryHome from "../CategoryHome/CategoryHome";
import Introduction from "../Introduction/Introduction";
import Invitation from "../Invitation/Invitation";
import "./Home.css";

function Home() {
	return (
		<>
			<div className="toolbar" />
			<Introduction />
			<Invitation />
			<CategoryHome />
		</>
	);
}

export default Home;
