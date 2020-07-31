// Action types
const INITIALIZING_SUCCESS = "INITIALIZING_SUCCESS";

// Action creators
export function initSuccess() { return {type: INITIALIZING_SUCCESS} }

// Thunk creators
export function init() {
    return (dispatch) => {
        // Imitation initialization process...
        setTimeout(() => dispatch(initSuccess()), 1000);
    }
}

// Initial state
const initialState = {
    isAppInitialized: false,
    isSaveInitialized: false
}
// Reducer
function appReducer(state = initialState, action) {
    switch (action.type) {
        case INITIALIZING_SUCCESS:
            return { ...state, isAppInitialized: true };
        default:
            return state;
    }
}

export default appReducer;