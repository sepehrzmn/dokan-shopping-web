import React from "react";
import "./Comment.css";
function Comment() {
	return (
		<div className="comment">
			<div className="c-title">
				<img
					src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80"
					alt="user"
				/>
				<h4>سپهر</h4>
			</div>
			<div className="c-body">
				<p>
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
					استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
					ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
					کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
					در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
					طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
					الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
					صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
					شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
					اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
					قرار گیرد.
				</p>
			</div>
		</div>
	);
}

export default Comment;