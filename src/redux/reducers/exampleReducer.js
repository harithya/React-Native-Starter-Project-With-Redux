const initialState = {
    example: 'Hello World'
}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'SET_EXAMPLE':
            return {
                ...state,
                example: action.payload
            };

        default:
            return state
    }
};
