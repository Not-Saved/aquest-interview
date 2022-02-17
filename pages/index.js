import { motion } from "framer-motion";
import Head from "next/head";

import { homePageVariants } from "util/variants";

export default function Home({ history }) {
	const initial = history.last === "/detail/[id]" && history.current === "/" ? "exitOpacity" : "exit";
	const animate = history.last === "/detail/[id]" && history.current === "/" ? "enterOpacity" : "enter";
	return (
		<>
			<Head>
				<title>The Abstract Design</title>
				<meta name="description" content="An assignment for a job interview" />
			</Head>
			<motion.div
				key="content"
				className="content home"
				variants={homePageVariants}
				initial={initial}
				exit="exit"
				animate={animate}
			>
				<h2 className="title">The Abstract design</h2>
				<p className="description">
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
