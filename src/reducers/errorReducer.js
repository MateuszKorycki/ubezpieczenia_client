import { ACTION_GET_ERRORS } from "../actions/typesActions";

const initialState = {};

function actionErrorReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
export default actionErrorReducer;