import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Product from "./Product";
import "./RelatedProducts.css";
function RelatedProducts() {
	return (
		<div className="related-products">
			<Swiper
				spaceBetween={5}
				breakpoints={{
					320: {
						slidesPerView: 2,
					},
					500: {
						slidesPerView: 3,
					},
					650: {
						slidesPerView: 4,
					},
					890: {
						slidesPerView: 5,
					},
					1200: {
						slidesPerView: 6,
					},
					1300: {
						slidesPerView: 7,
					},
					1500: {
						slidesPerView: 8,
					},
				}}
			>
				{Array(20)
					.fill("")
					.map((item, index) => {
						return (
							<SwiperSlide key={index + 1}>
								<Product />
							</SwiperSlide>
						);
					})}
			</Swiper>
		</div>
	);
}

export default RelatedProducts;
