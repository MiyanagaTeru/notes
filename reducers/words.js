const initState = [
	{
		id: 0,
		content: 'milk'
	},
	{
		id: 1,
		content: 'bread'
	}
];

const words = (state = initState, action) => {
	switch (action.type) {
		case 'ADD_WORDS':
			const lastid = state[state.length-1].id;
			return [
				...state,
				{
					id: lastid + 1,
					content: action.content
				}
			];
		default:
			return state;
	}
}

export default words;