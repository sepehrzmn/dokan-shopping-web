import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useFilter } from "../../../contexts/filter";
function Search() {
	const [boxSearch, setBoxSearch] = useState(false);
	const { search, setSearch } = useFilter();
	return (
		<motion.section
			className="FS-search"
			animate={{
				height: boxSearch ? "max-content" : "45px",
			}}
		>
			<motion.h3
				onClick={() => setBoxSearch(!boxSearch)}
				whileHover={{
					scale: 1.05,
				}}
			>
				<Icon icon="eva:search-outline" fontSize={25} />
				<span>جست و جو</span>
				<motion.div
					animate={{
						rotateZ: boxSearch ? 180 : 0,
					}}
				>
					<Icon
						icon="ep:arrow-down"
						style={{ marginTop: "5px", marginRight: "10px" }}
					/>
				</motion.div>
			</motion.h3>
			<form className="search-form">
				<input
					type="text"
					name="search"
					id="search"
					placeholder="بگو تا بگردم"
					value={search}
					onChange={(e) => setSearch(e.currentTarget.value)}
				/>
			</form>
		</motion.section>
	);
}

export default Search;
