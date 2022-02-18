const defaultTransition = {
	duration: 0.7,
	ease: [0.72, 0.0, 0.48, 1.0],
};

export const homePageVariants = {
	enter: {
		x: 0,
		opacity: [1, 1],
		transition: defaultTransition,
		transitionEnd: { zIndex: 10 },
	},
	exit: {
		x: "-100%",
		opacity: [1, 1],
		transition: defaultTransition,
		zIndex: 0,
	},
	enterOpacity: {
		x: [0, 0],
		opacity: [0, 1],
		transition: { ...defaultTransition, delay: 0.4 },
		transitionEnd: { zIndex: 10 },
	},
	exitOpacity: {
		x: [0, 0],
		opacity: 0,
		transition: defaultTransition,
		zIndex: 0,
	},
};

export const detailPageVariants = {
	enter: {
		x: 0,
		opacity: [1, 1],
		transition: defaultTransition,
		transitionEnd: { zIndex: 10 },
	},
	exit: {
		x: "-100%",
		opacity: [1, 1],
		transition: defaultTransition,
		zIndex: 0,
	},
	enterOpacity: { x: [0, 0], opacity: [0, 1], transition: defaultTransition },
	exitOpacity: {
		x: [0, 0],
		opacity: 0,
		transition: defaultTransition,
	},
};

export const modeSwitchVariants = {
	visible: { opacity: 1, transition: { duration: 0.7 } },
	hidden: { opacity: 0.397, transition: { duration: 0.7 } },
};

export const listVariants = {
	slider: {
		x: 0,
		transition: defaultTransition,
	},
	compact: {
		x: 0,
		transition: defaultTransition,
	},
	scrollToStart: {
		x: 0,
		transition: defaultTransition,
	},
};

export const listItemImageVariants = {
	slider: {
		scale: 1,
		x: 0,
		y: 0,
		transition: defaultTransition,
	},
	compact: ({ index }) => {
		index = index - 1;
		return {
			scale: 0.855 ** index + 0.1,
			x: `calc(var(--main-content-width) + -18.5em * ${index} - 0.875em * ${index * index})`,
			y: 0,
			transition: defaultTransition,
		};
	},
	selected: ({ offset, screenWidth, width }) => ({
		scale: 2.4,
		x: -offset + screenWidth - width * 0.6 * 2.4,
		y: "26.75em",
		transition: defaultTransition,
	}),
	exit: ({ index, selected }) => ({
		scale: 1,
		x: index > selected.current ? "200vw" : "-200vw",
		y: 0,
		transition: defaultTransition,
	}),
	enter: {
		scale: 1,
		x: 0,
		y: 0,
		transition: defaultTransition,
	},
};

export const listItemTextVariants = {
	slider: {
		y: 0,
		opacity: 1,
		transition: defaultTransition,
	},
	compact: {
		y: "25vh",
		opacity: 1,
		transition: defaultTransition,
	},
	detail: { opacity: 0, y: [0, 0], transition: defaultTransition },
};
