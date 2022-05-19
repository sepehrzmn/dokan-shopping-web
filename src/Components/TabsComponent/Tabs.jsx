import React from "react";
import { useState } from "react";
import { Profile, Cart } from "./AllTabs";
import "./Tabs.css";

function Tabs() {
	const [activeTab, setActiveTab] = useState("tab1");

	function handleTab1() {
		setActiveTab("tab1");
	}
	function handleTab2() {
		setActiveTab("tab2");
	}
	return (
		<div className="Tabs">
			{/* tab nav */}
			<ul className={`nav `}>
				<li
					className={activeTab === "tab1" ? "active" : ""}
					onClick={handleTab1}
				>
					پروفابل
				</li>
				<li
					className={activeTab === "tab2" ? "active" : ""}
					onClick={handleTab2}
				>
					سبد
				</li>
			</ul>
			<div className="outlet">
				{activeTab === "tab1" ? <Profile /> : <Cart />}
			</div>
		</div>
	);
}

export default Tabs;
