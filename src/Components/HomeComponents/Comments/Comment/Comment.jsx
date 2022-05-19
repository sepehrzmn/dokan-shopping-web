import React from "react";
import "./Comment.css";
import PropTypes from "prop-types";
function Comment({ name, avatar, text }) {
	return (
		<div className="comment">
			<div className="c-title">
				<img
					src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80"
					alt="user"
				/>
				<h4>{name}</h4>
			</div>
			<div className="c-body">
				<p>{text}</p>
			</div>
		</div>
	);
}
Comment.defaultProps = {
	name: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};
export default Comment;
