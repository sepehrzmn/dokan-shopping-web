import React from "react";
import { Tabs } from "../../";
import "./Dashboard.css";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
function Dashboard() {
	const navigation = useNavigate();
	return (
		<div className="dashboard-container">
			<div
				className="btn-store"
				onClick={() => {
					navigation("/shopping");
				}}
			>
				<Icon icon="carbon:store" />
			</div>
			<div
				className="btn-back"
				onClick={() => {
					navigation(-1);
				}}
			>
				<Icon icon="eva:arrow-back-fill" />
			</div>
			<Tabs />
		</div>
	);
}

export default Dashboard;
