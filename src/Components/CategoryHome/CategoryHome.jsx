import React from "react";
import "./CategoryHome.css";
import { Icon } from "@iconify/react";
import { Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import Product from "../Product/Product";

function CategoryHome() {
	return (
		<>
			<div className="categoryHome">
				<div className="popular-category">
					{Array(5)
						.fill("")
						.map((x, index) => {
							return (
								<div key={index} className="p-c-item">
									<Icon
										icon="emojione-monotone:violin"
										color="white"
										fontSize={80}
									/>
									<span>ویالون</span>
								</div>
							);
						})}
				</div>
				<Swiper
					modules={[Pagination, A11y]}
					spaceBetween={20}
					slidesPerView={5}
					pagination={{ clickable: true }}
				>
					{Array(16)
						.fill("")
						.map((x, index) => {
							return (
								<>
									<SwiperSlide key={index}>
										<Product />
									</SwiperSlide>
								</>
							);
						})}
				</Swiper>
			</div>
		</>
	);
}

export default CategoryHome;
