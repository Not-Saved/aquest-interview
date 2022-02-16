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
		scale: 0.855 ** index + 0.1,
		x: -290 * index - 14 * index * index,
		y: 0,
		transition: { duration: 1 },
	}),
	selected: ({ index }) => ({
		transition: { duration: 1 },
		x: (5 - index - 1) * 499 - 1630,
		scale: 2.4,
		y: 460,
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
	detail: { opacity: 0, y: 0, x: -735, transition: { duration: 1 } },
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

	function handleClick() {
		if (document.getElementById("scrollingList").style.cursor !== "grabbing" && route === "/slider") {
			setSelected({ current: index + 1, removed: -1 });
			router.push(`/detail/${index + 1}`, null);
		}
	}

	return (
		<motion.li className={styles.item}>
			<motion.div
				className={styles.image}
				custom={{ index, selected }}
				animate={getImageAnimate(selected)}
				variants={imageVariants}
				style={{ zIndex: 5 - index }}
				onClick={handleClick}
			>
				<Image src={data.url} layout="fill" priority alt="" quality={"100"} />
			</motion.div>
			<motion.div className={styles.text} initial={false} animate={getTextAnimate(selected)} variants={textVariants}>
				<h2>{data.name}</h2>
				<p>{data.handle}</p>
			</motion.div>
		</motion.li>
	);
}
