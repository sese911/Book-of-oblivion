import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import dataReducer from "./dataReducer";
import appReducer from "./appReducer";

const reducers = combineReducers({
    data: dataReducer,
    app: appReducer
});

export default createStore(reducers, applyMiddleware(thunk));