import { combineReducers } from "redux";
import actionAuthReducer from "./authReducer";
import actionErrorReducer from "./errorReducer";

export default combineReducers({
  auth: actionAuthReducer,
  errors: actionErrorReducer
});
