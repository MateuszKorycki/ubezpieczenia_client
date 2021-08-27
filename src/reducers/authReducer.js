import { ACTION_SET_THE_CURRENT_USER, ACTION_USER_LOADING } from "../actions/typesActions";

const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false
};

function actionAuthReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_SET_THE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case ACTION_USER_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
export default actionAuthReducer;