import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import styles from "./item.module.css";

const imageVariants = {
	slider: {
		x: 0,
		scale: 1,
		transition: { duration: 1 },
	},
	compact: ({ index }) => ({
		x: -370 * index,
		scale: 0.9 ** index,
		y: 0,
		transition: { duration: 1 },
	}),
	selected: ({ index }) => ({
		transition: { duration: 1 },
		x: (5 - index - 1) * 499 - 1500,
		scale: 2,
		y: 330,
	}),
	exit: ({ index, selected }) => ({
		x: index >= selected.current ? 3000 : -3000,
		transition: { duration: 1 },
	}),
	enter: () => ({
		transition: { duration: 1 },
		x: 0,
		scale: 1,
		y: 0,
	}),
};

const textVariants = {
	slider: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: { duration: 1 },
	},
	compact: {
		x: -695,
		y: 300,
		opacity: 1,
		transition: { duration: 1 },
	},
	detail: { opacity: 0, y: 0, x: -695, transition: { duration: 1 } },
};

export default function Item({ route, index, data, selected, setSelected }) {
	const router = useRouter();

	function getImageAnimate(selected) {
		if (selected.current == index + 1) return "selected";
		else if (route === "/detail/[id]") return "exit";
		else if (selected.removed == index + 1 && route === "/slider") return "enter";
		else if (route === "/slider") return "slider";
		else return "compact";
	}

	function getTextAnimate(selected) {
		if (route === "/slider") return "slider";
		else if (selected.current !== -1) return "detail";
		else return "compact";
	}

	return (
		<motion.li className={styles.item}>
			<motion.div
				className={styles.image}
				custom={{ index, selected }}
				animate={getImageAnimate(selected)}
				variants={imageVariants}
				style={{ zIndex: 5 - index }}
				onClick={(e) => {
					if (document.getElementById("scrollingList").style.cursor !== "grabbing" && route === "/slider") {
						setSelected({ current: index + 1, removed: -1 });
						router.push(`/detail/${index + 1}`, null);
					}
				}}
			>
				<Image src={data.url} layout="fill" priority alt="" />
			</motion.div>
			<motion.div
				className={styles.text}
				custom={index}
				initial={false}
				animate={getTextAnimate(selected)}
				variants={textVariants}
			>
				<h3>{data.name}</h3>
				<p>{data.handle}</p>
			</motion.div>
		</motion.li>
	);
}
