import React from "react";
import CategoryHome from "../CategoryHome/CategoryHome";
import Comments from "../Comments/Comments";
import Introduction from "../Introduction/Introduction";
import Invitation from "../Invitation/Invitation";
import Possibilities from "../Possibilities/Possibilities";
import "./Home.css";

function Home() {
	return (
		<>
			<div className="toolbar" />
			<Introduction />
			<Invitation />
			<CategoryHome />
			<Possibilities />
			<Comments />
		</>
	);
}

export default Home;
