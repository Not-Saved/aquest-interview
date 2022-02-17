import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import styles from "./item.module.css";
import { listItemImageVariants, listItemTextVariants } from "util/variants";

export default function Item({ route, index, numberOfItems, data, selected, setSelected }) {
	const router = useRouter();

	function handleClick() {
		if (document.getElementById("scrollingList").style.cursor !== "grabbing" && route === "/slider") {
			setSelected({ current: `${index}`, removed: -1 });
			router.push(`/detail/${index}`);
		}
	}

	return (
		<li className={styles.item}>
			<motion.div
				className={styles.image}
				custom={{ index, selected, numberOfItems }}
				initial={false}
				animate={getImageAnimateLabel(selected, route, index)}
				variants={listItemImageVariants}
				style={{ zIndex: 6 - index }}
				onClick={handleClick}
			>
				<Image src={data.url} layout="fill" priority alt="" quality={"100"} />
			</motion.div>
			<motion.div
				className={styles.text}
				initial={getTextAnimateLabel(selected, route)}
				animate={getTextAnimateLabel(selected, route)}
				variants={listItemTextVariants}
			>
				<h2>{data.name}</h2>
				<p>{data.handle}</p>
			</motion.div>
		</li>
	);
}

function getImageAnimateLabel(selected, route, index) {
	if (selected.current == index) return "selected";
	else if (route === "/detail/[id]") return "exit";
	else if (selected.removed == index && route === "/slider") return "enter";
	else if (route === "/slider") return "slider";
	else return "compact";
}

function getTextAnimateLabel(selected, route) {
	if (route === "/slider") return "slider";
	else if (selected.current !== -1) return "detail";
	else return "compact";
}
