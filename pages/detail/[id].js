import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

import data from "data.json";

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

export default function Detail(props) {
	return (
		<>
			<Head>
				<title>{props.name}</title>
				<meta name="description" content="An assignment for a job interview" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<motion.div
				key="content"
				className="content"
				variants={descriptionVariants}
				initial={{ x: -695 }}
				exit="exit"
				animate="enter"
			>
				<h2 className="title">{props.name}</h2>
				<p className="handle">{props.handle}</p>
				<p className="description">
					{props.description}
					<Link href="/slider">Back</Link>
				</p>
			</motion.div>
		</>
	);
}
export async function getStaticPaths() {
	const paths = Object.values(data).map((item, i) => ({
		params: { id: String(i + 1) },
	}));

	return {
		paths: paths,
		fallback: true,
	};
}

export async function getStaticProps({ params }) {
	const props = data[params.id];
	return {
		props: props, // will be passed to the page component as props
	};
}
