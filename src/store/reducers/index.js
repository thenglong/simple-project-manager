import { combineReducers } from "redux";
import authReducer from "./auth";
import projectReducer from "./projectReducer";

const rootReducer = combineReducers({
	auth: authReducer,
	project: projectReducer,
});

export default rootReducer;
