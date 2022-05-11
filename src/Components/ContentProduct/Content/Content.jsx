import React from "react";
import "./Content.css";
import Product from "./Product";

function Content() {
	return (
		<div className="content">
			<div className="SCC__content">
				{Array(50)
					.fill("")
					.map((item, index) => {
						return <Product key={index + 1} />;
					})}
			</div>
		</div>
	);
}

export default Content;
