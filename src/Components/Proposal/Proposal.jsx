import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Proposal.css";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useEffect } from "react";
import Product from "../Product/Product";
import { useShopping } from "../../contexts/Shopping";
function Proposal() {
	const [data, setData] = useState(null);
	const items = useShopping();
	useEffect(() => {
		setData(items);
	}, [items]);

	return (
		<div className="proposal">
			<Swiper
				slidesPerView={5}
				spaceBetween={50}
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 0,
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
				{data &&
					data.proposal.map((item, index) => {
						return (
							<SwiperSlide key={index + 1}>
								<Product
									caption={item.caption}
									count={item.count}
									rating={item.rating}
									id={item.id}
									price={item.price}
								/>
							</SwiperSlide>
						);
					})}
			</Swiper>
		</div>
	);
}

export default Proposal;
