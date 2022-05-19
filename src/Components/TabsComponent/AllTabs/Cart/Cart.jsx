import React from "react";
import violin from "../../../../assets/image/violin.png";
import "./Cart.css";
import { Icon } from "@iconify/react";

export default function Cart() {
	return (
		<div className="cart">
			<div>
				<table>
					<tr className="header-table">
						<th>محصول</th>
						<th>نام محصول</th>
						<th>قیمت محصول</th>
						<th>حذف</th>
					</tr>

					{Array(16)
						.fill("")
						.map((item, index) => {
							return (
								<>
									<tr className="table-item">
										<td>
											<div className="product-img">
												<img src={violin} alt="" />
											</div>
										</td>
										<td>
											<div className="product-caption">ویالون مدل x</div>
										</td>
										<td>
											<div className="product-price">2,00,000</div>
										</td>
										<td>
											<div className="btn-delete" data-product-id="1">
												<Icon icon="ep:delete-filled" />
											</div>
										</td>
									</tr>
								</>
							);
						})}
				</table>
			</div>
			<div>
				<div className="info-cart">
					<div className="info-cart-container">
						<div className="count">
							<span>تعداد محصولات :</span>
							<span>1</span>
						</div>
						<div className="price">
							<span>قیمت :</span>
							<span>2,000,000</span>
						</div>
						<div className="price">
							<span>سود شما از خرید :</span>
							<span>100</span>
						</div>
						<div>پرداخت</div>
					</div>
				</div>
			</div>
		</div>
	);
}
