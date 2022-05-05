import React from "react";
import Introduction from "../Introduction/Introduction";
import Invitation from "../Invitation/Invitation";
import "./Home.css";

function Home() {
	return (
		<>
			<div className="toolbar" />
			<Introduction />
			<Invitation />
		</>
	);
}

export default Home;
