import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Items from "./Items/Items";
import "./Proposal.css";
import { Icon } from "@iconify/react";
function Proposal() {
	return (
		<div className="proposal">
			<Swiper
				slidesPerView={5}
				spaceBetween={50}
				breakpoints={{
					"@0.0": {
						slidesPerView: 1,
						spaceBetween: 0,
					},

					"@0.6": {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					"@1.089": {
						slidesPerView: 3,
						spaceBetween: 5,
					},
					"@1.5": {
						slidesPerView: 4,
						spaceBetween: 40,
					},
					"@1.8": {
						slidesPerView: 5,
						spaceBetween: 40,
					},
					"@1.79": {
						slidesPerView: 5,
						spaceBetween: 10,
					},
				}}
			>
				<SwiperSlide>
					<div className="SPR-title">
						<Icon icon="bxs:hot" fontSize={70} />
						فروش ویژه
						<Icon
							icon="bi:arrow-left"
							style={{ marginTop: "40px" }}
							fontSize={20}
						/>
					</div>
				</SwiperSlide>
				{Array(16)
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

export default Proposal;
