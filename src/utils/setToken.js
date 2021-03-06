import axios from "axios";

const setToken = token => {
  if (token) {
    axios.defaults.headers.common["Autoryzacja"] = token;
  } else {
    delete axios.defaults.headers.common["Autoryzacja"];
  }
};

export default setToken;
