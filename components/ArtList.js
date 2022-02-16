import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ArtItem from "./ArtItem";
import styles from "./artList.module.css";

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

export default function ArtList({ route, router }) {
	const ref = useRef();
	const controls = useAnimation();
	const [selected, setSelected] = useState({ current: -1, removed: -1 });

	useEffect(() => {
		console.log(selected);
		if (route === "/" || route === "/detail/[id]") controls.start({ x: 0, transition: { duration: 0.7 } });
		const current = router.query.id ? router.query.id : -1;
		setSelected((old) => ({ current: current, removed: old.current }));
	}, [route, router.query.id]);

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
				ref={ref}
				drag={route === "/slider" ? "x" : false}
				dragConstraints={{ left: route === "/" ? 0 : -762, right: 0 }}
				dragSnapToOrigin={route === "/"}
				whileDrag={{ cursor: "grabbing" }}
				animate={controls}
			>
				{["1", "2", "3", "4", "5"].map((e, i) => (
					<ArtItem key={i} index={i} imageName={e} route={route} selected={selected} setSelected={setSelected} />
				))}
			</motion.ul>
		</motion.div>
	);
}
