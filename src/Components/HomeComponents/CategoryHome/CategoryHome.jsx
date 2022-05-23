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
							style={{ padding: "40px 10px" }}
							breakpoints={{
								320: {
									slidesPerView: 1,
									spaceBetween: 10,
								},

								700: {
									slidesPerView: 2,
									spaceBetween: 10,
								},
								900: {
									slidesPerView: 3,
									spaceBetween: 5,
								},
								1200: {
									slidesPerView: 4,
									spaceBetween: 40,
								},
								1500: {
									slidesPerView: 5,
									spaceBetween: 40,
								},
							}}
							allowTouchMove={true}
							pagination={{ clickable: true }}
						>
							{data.newProducts.map((item, index) => {
								return (
									<SwiperSlide
										style={{
											height: "30rem",
											display: "flex",
											justifyContent: "center",
										}}
										key={item.id}
									>
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
