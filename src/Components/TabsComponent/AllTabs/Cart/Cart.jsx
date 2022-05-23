import React, { useState, useEffect } from "react";
import violin from "../../../../assets/image/violin.png";
import "./Cart.css";
import { Icon } from "@iconify/react";
import { useCart } from "../../../../contexts/cart";
import { ConvertNumberToPersian } from "../../../../Data/Data";

export default function Cart() {
	const { cartItems, deleteProduct } = useCart();
	const [data, setData] = useState([]);

	useEffect(() => {
		cartItems && setData(cartItems);
	}, [cartItems]);
	function deleted(event) {
		deleteProduct(event.currentTarget.getAttribute("data-product-id"));
	}
	return (
		<div className="cart">
			<div>
				{data.length ? (
					<>
						<table>
							<tr className="header-table">
								<th>محصول</th>
								<th>نام محصول</th>
								<th>قیمت محصول</th>
								<th>حذف</th>
							</tr>

							{data.map((item, index) => {
								return (
									<>
										<tr className="table-item">
											<td>
												<div className="product-img">
													<img
														src={`../../images/allProducts/product-${item.id}.png`}
														alt=""
													/>
												</div>
											</td>
											<td>
												<div className="product-caption">{item.caption}</div>
											</td>
											<td>
												<div className="product-price">
													{ConvertNumberToPersian(item.price)}
												</div>
											</td>
											<td>
												<div
													className="btn-delete"
													data-product-id={item.product_id}
													onClick={deleted}
												>
													<Icon icon="ep:delete-filled" />
												</div>
											</td>
										</tr>
									</>
								);
							})}
						</table>
					</>
				) : (
					""
				)}
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
