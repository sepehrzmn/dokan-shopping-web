import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import Items from "./Items/Items";
import "./slider-shopping.css";

function SliderShopping() {
	return (
		<div className="slider-shopping">
			<Swiper
				modules={[Navigation, Pagination, A11y]}
				navigation
				pagination={{ clickable: true }}
				style={{ width: "80%", borderRadius: "10px" }}
			>
				{Array(5)
					.fill("")
					.map((item, index) => {
						return (
							<SwiperSlide key={index + 1}>
								<Items />
							</SwiperSlide>
						);
					})}
			</Swiper>
		</div>
	);
}

export default SliderShopping;
