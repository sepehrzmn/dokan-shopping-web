import React from "react";

function Questions() {
	return (
		<div className="cpi-question" id="question">
			<h3 className="title">پرسش</h3>
			<form className="cpi-question-form">
				<textarea placeholder="سوال خود را بپرسید" />
				<button type="submit">ارسال</button>
			</form>
		</div>
	);
}

export default Questions;
