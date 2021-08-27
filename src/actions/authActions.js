import axios from "axios";
import setToken from "../utils/setToken";
import jwt_decode from "jwt-decode";

import { ACTION_GET_ERRORS, ACTION_SET_THE_CURRENT_USER, ACTION_USER_LOADING } from "./typesActions";


export const _auctionRegisterUser_ = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: ACTION_GET_ERRORS,
        payload: err.response.data
      })
    );
};


export const _auctionLoginUser_ = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);

      setToken(token);
      const decoded = jwt_decode(token);
      dispatch(setTheCurrentUserAction(decoded));
    })
    .catch(err => {
        // if (err.response.data.nonConfirmed) {
        //     alert(err.response.data.nonConfirmed);
        // }
        dispatch({
            type: ACTION_GET_ERRORS,
            payload: err.response.data
        })
    }

    );
};

export const setTheCurrentUserAction = decoded => {
  return {
    type: ACTION_SET_THE_CURRENT_USER,
    payload: decoded
  };
};


export const setUserLoadingAuth = () => {
  return {
    type: ACTION_USER_LOADING
  };
};


export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwtToken");
  setToken(false);
  dispatch(setTheCurrentUserAction({}));
};