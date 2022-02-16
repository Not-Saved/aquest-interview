import { motion } from "framer-motion";
import Link from "next/link";
import styles from "styles/detail.module.css";

const descriptionVariants = {
	exit: {
		x: -695,
		transition: { duration: 1 },
	},
	enter: {
		x: 0,
		transition: { duration: 1 },
	},
};

export default function Detail() {
	return (
		<motion.div
			key="detailDescription"
			className={styles.description}
			variants={descriptionVariants}
			initial={{ x: -695 }}
			exit={"exit"}
			animate={"enter"}
		>
			<h2>DETAIL</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum.
				<Link href="/slider">Back</Link>
			</p>
		</motion.div>
	);
}
