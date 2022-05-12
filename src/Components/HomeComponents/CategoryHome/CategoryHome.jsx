import React from "react";
import "./CategoryHome.css";
import { Icon } from "@iconify/react";
import { Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import Product from "../../Product/Product";
import { motion } from "framer-motion";

function CategoryHome() {
	return (
		<>
			<div className="categoryHome">
				<div className="popular-category">
					{Array(5)
						.fill("")
						.map((x, index) => {
							return (
								<motion.div
									initial={{ background: "#727272" }}
									whileHover={{
										background: "#d1d1d1",
										color: "#727272",
									}}
									key={index}
									className="p-c-item"
								>
									<Icon
										icon="emojione-monotone:violin"
										color="white"
										fontSize={80}
									/>
									<span>ویالون</span>
								</motion.div>
							);
						})}
				</div>
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
					{Array(16)
						.fill("")
						.map((x, index) => {
							return (
								<>
									<SwiperSlide style={{ height: "30rem" }} key={index}>
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
