import { combineReducers } from "redux";
import exampleReducer from "./reducers/exampleReducer";

const reducer = combineReducers({
    example: exampleReducer
})

export default reducer;