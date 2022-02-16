import { motion } from "framer-motion";
import Head from "next/head";

import styles from "styles/home.module.css";

const descriptionVariants = {
	exit: {
		x: -695,
		transition: { duration: 1 },
	},
	enter: {
		x: [null, 0],
		transition: { duration: 1 },
	},
};

export default function Home() {
	return (
		<>
			<Head>
				<title>The Abstract Design</title>
				<meta name="description" content="An assignment for a job interview" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<motion.div
				key="description"
				className={styles.description}
				variants={descriptionVariants}
				initial={{ x: -695 }}
				exit={"exit"}
				animate="enter"
			>
				<h2>The Abstract design</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
			</motion.div>
		</>
	);
}
