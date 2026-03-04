import { combineReducers } from "redux";
import { wheatherReducer } from "./wheatherReducers";

const rootReducer=combineReducers({
    wheatherReducer,
})
export default rootReducer;