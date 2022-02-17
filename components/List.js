import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import Item from "./Item";

import styles from "./list.module.css";
import data from "data.json";

import { listVariants } from "util/variants";

export default function List({ route, router }) {
	const [selected, setSelected] = useState({ current: router.query.id ? router.query.id : -1, removed: -1 });
	const controls = useAnimation();

	useEffect(() => {
		if (route === "/" || route === "/detail/[id]") controls.start("scrollToStart");
		const current = router.query.id ? router.query.id : -1;
		setSelected((old) => ({ current: current, removed: old.current }));
	}, [route, router.query.id, controls]);

	return (
		<motion.div
			className={styles.listContainer}
			animate={route === "/slider" ? "slider" : "compact"}
			initial={false}
			variants={listVariants}
		>
			<motion.ul
				className={styles.list}
				id="scrollingList"
				variants={listVariants}
				animate={controls}
				drag={route === "/slider" ? "x" : false}
				dragConstraints={{ left: route === "/" ? 0 : -765, right: 0 }}
				dragSnapToOrigin={route === "/"}
				whileDrag={{ cursor: "grabbing" }}
			>
				{Object.values(data).map((data, i, array) => (
					<Item
						key={i}
						index={i + 1}
						numberOfItems={array.length}
						data={data}
						route={route}
						selected={selected}
						setSelected={setSelected}
					/>
				))}
			</motion.ul>
		</motion.div>
	);
}
