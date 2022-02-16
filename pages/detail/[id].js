import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

import ArrowSvg from "components/svg/ArrowSvg";

import data from "data.json";

const descriptionVariants = {
	exit: {
		x: -735,
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
			</Head>
			<motion.div
				key="content"
				className="content detail"
				variants={descriptionVariants}
				initial={{ x: -735 }}
				exit="exit"
				animate="enter"
			>
				<h2 className="title">{props.name}</h2>
				<p className="handle">{props.handle}</p>
				<p className="description">{props.description}</p>
				<Link href="/slider">
					<a className="back">
						<ArrowSvg />
						<span>Back</span>
					</a>
				</Link>
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
		props: props,
	};
}
