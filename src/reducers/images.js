const initialState = 'affenpinscher';

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case 'SHOW_PHOTO':
			return action.payload;
		default:
			return state;
	}
};

export default reducer;