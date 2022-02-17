const defaultTransition = {
	duration: 0.8,
	ease: "easeInOut",
};

export const homePageVariants = {
	enter: {
		x: 0,
		opacity: [1, 1],
		transition: defaultTransition,
		transitionEnd: { zIndex: 10 },
	},
	exit: {
		x: -735,
		opacity: [1, 1],
		transition: defaultTransition,
		zIndex: 0,
	},
	enterOpacity: { x: [0, 0], opacity: [0, 1], transition: { ...defaultTransition, delay: 0.4 } },
	exitOpacity: {
		x: [0, 0],
		opacity: 0,
		transition: defaultTransition,
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
		x: -735,
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
			x: 735 + -290 * index - 14 * index * index,
			y: 0,
			transition: defaultTransition,
		};
	},
	selected: ({ index, numberOfItems }) => ({
		scale: 2.4,
		x: 735 + (numberOfItems - index) * 499 - 1630,
		y: 460,
		transition: defaultTransition,
	}),
	exit: ({ index, selected }) => ({
		scale: 1,
		x: index > selected.current ? 3000 : -3000,
		y: 0,
		transition: defaultTransition,
	}),
	enter: () => ({
		scale: 1,
		x: 0,
		y: 0,
		transition: defaultTransition,
	}),
};

export const listItemTextVariants = {
	slider: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: defaultTransition,
	},
	compact: {
		x: 0,
		y: 300,
		opacity: 1,
		transition: defaultTransition,
	},
	detail: { opacity: 0, y: [0, 0], x: 0, transition: defaultTransition },
};
