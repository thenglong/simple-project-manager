const initState = {
	projects: [
		{
			id: "1",
			title: "build website",
			content: "Lorem ipsum dolor sit amet.",
		},
		{
			id: "2",
			title: "build website2",
			content: "Lorem ipsum dolor sit amet.",
		},
		{
			id: "2",
			title: "build website3",
			content: "Lorem ipsum dolor sit amet.",
		},
	],
};

const projectReducer = (state = initState, action) => {
	return state;
};

export default projectReducer;
