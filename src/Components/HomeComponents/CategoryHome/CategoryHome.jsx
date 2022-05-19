import React from "react";
import "./CategoryHome.css";
import { Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import Product from "../../Product/Product";
import { useHomeItems } from "../../../contexts/home";
import { useState } from "react";
import { useEffect } from "react";

function CategoryHome() {
	const [data, setData] = useState();
	const items = useHomeItems();
	useEffect(() => {
		setData(items);
	}, [items]);
	return (
		<>
			{!data ? (
				""
			) : (
				<>
					<div className="categoryHome">
						<Swiper
							modules={[Pagination, A11y]}
							spaceBetween={20}
							slidesPerView={5}
							style={{ padding: "40px 10px" }}
							breakpoints={{
								"@0.0": {
									slidesPerView: 2,
									spaceBetween: 50,
								},
								"@0.75": {
									slidesPerView: 2,
									spaceBetween: 10,
								},

								"@0.80": {
									slidesPerView: 2,
									spaceBetween: 10,
								},
								"@1.08": {
									slidesPerView: 2,
									spaceBetween: 5,
								},
								"@1.1": {
									slidesPerView: 3,
									spaceBetween: 40,
								},
								"@1.4": {
									slidesPerView: 4,
									spaceBetween: 40,
								},
								"@1.67": {
									slidesPerView: 5,
									spaceBetween: 10,
								},
							}}
							allowTouchMove={true}
							pagination={{ clickable: true }}
						>
							{data.newProducts.map((item, index) => {
								return (
									<SwiperSlide style={{ height: "30rem" }} key={item.id}>
										<Product
											caption={item.caption}
											count={item.count}
											rating={item.rating}
											price={item.price}
											id={item.id}
										/>
									</SwiperSlide>
								);
							})}
						</Swiper>
					</div>
				</>
			)}
		</>
	);
}

export default CategoryHome;
