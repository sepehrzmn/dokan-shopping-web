import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Product from "./Product";
import "./RelatedProducts.css";
function RelatedProducts() {
	return (
		<div className="related-products">
			<Swiper slidesPerView={8} spaceBetween={5}>
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
