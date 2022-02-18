import "styles/globals.css";
import "styles/theme.css";

import Head from "next/head";
import { AnimatePresence } from "framer-motion";

import Layout from "components/Layout";
import List from "components/List";
import ModeSwitch from "components/ModeSwitch";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps, router }) {
	const [history, setHistory] = useState({ current: router.route, last: "" });

	useEffect(() => {
		setHistory((old) => ({ current: router.route, last: old.current !== router.route ? old.current : old.last }));
	}, [router.route]);

	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<AnimatePresence initial={false}>
					<Component key={router.route} history={history} {...pageProps} />
					{(router.route === "/" || router.route === "/slider") && <ModeSwitch key="modeSwitch" />}
				</AnimatePresence>
				<List route={router.route} router={router} />
			</Layout>
		</>
	);
}

export default MyApp;
