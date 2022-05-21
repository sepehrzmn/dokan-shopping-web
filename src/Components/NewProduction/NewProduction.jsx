import React, { useEffect, useState } from "react";
import { useFilter } from "../../contexts/filter";
import { useShopping } from "../../contexts/Shopping";
import ContentProduct from "../ContentProduct/ContentProduct";
import "./NewProduction.css";
function NewProduction() {
	const [data, setData] = useState();
	const items = useShopping();

	useEffect(() => {
		setData(items);
	}, [items]);
	return (
		<div className="new-product">
			<div className="SNP-content">
				{data && <ContentProduct products={data.products} />}
			</div>
		</div>
	);
}

export default NewProduction;
