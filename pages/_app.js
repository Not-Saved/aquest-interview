import "styles/globals.css";
import "styles/theme.css";

import Head from "next/head";
import { AnimatePresence } from "framer-motion";

import Layout from "components/Layout";
import PageWrapper from "components/PageWrapper";
import List from "components/List";
import ModeSwitch from "components/ModeSwitch";

function MyApp({ Component, pageProps, router }) {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<PageWrapper>
					<AnimatePresence initial={false} exitBeforeEnter>
						<Component key={router.route} {...pageProps} />
					</AnimatePresence>
				</PageWrapper>

				<List route={router.route} router={router} />
			</Layout>
			<AnimatePresence initial={false} exitBeforeEnter>
				{(router.route === "/" || router.route === "/slider") && (
					<ModeSwitch key="modeSwitch" route={router.route} router={router} />
				)}
			</AnimatePresence>
		</>
	);
}

export default MyApp;
