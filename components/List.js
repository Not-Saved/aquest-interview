import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import Item from "./Item";

import styles from "./list.module.css";
import data from "data.json";

const listVariants = {
	slider: {
		width: "100vw",
		x: -695,
		transition: {
			duration: 1,
		},
	},
	compact: {
		x: 0,
		width: "auto",
		transition: { duration: 1 },
	},
};

export default function List({ route, router }) {
	const controls = useAnimation();
	const [selected, setSelected] = useState({ current: -1, removed: -1 });

	useEffect(() => {
		if (route === "/" || route === "/detail/[id]") controls.start({ x: 0, transition: { duration: 0.7 } });
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
				drag={route === "/slider" ? "x" : false}
				dragConstraints={{ left: route === "/" ? 0 : -762, right: 0 }}
				dragSnapToOrigin={route === "/"}
				whileDrag={{ cursor: "grabbing" }}
				animate={controls}
			>
				{Object.values(data).map((e, i) => (
					<Item key={i} index={i} data={e} route={route} selected={selected} setSelected={setSelected} />
				))}
			</motion.ul>
		</motion.div>
	);
}
