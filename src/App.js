import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import jwt_decode from "jwt-decode";
import setToken from "./utils/setToken.js";

import { setTheCurrentUserAction, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Home from "./components/pages/home/Home";
import Calendar from "./components/pages/calendar/Calendar";
import Statistics from "./components/pages/statistics/Statistics";
import Archives from "./components/pages/archives/Archives";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import PrivateRoute from "./components/private-route/PrivateRoute";
import AdminPrivateRoute from "./components/private-route/AdminPrivateRoute";
import Confirmation from "./components/pages/confirmation/Confirmation";

if (localStorage.jwtToken) {

    const token = localStorage.jwtToken;
    setToken(token);

    const decoded = jwt_decode(token);

    store.dispatch(setTheCurrentUserAction(decoded));

    const currentTime = Date.now() / 2500; // to get in milliseconds
    if (decoded.exp < currentTime) {

        store.dispatch(logoutUser());


        window.location.href = "./login";
    }
}
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="main-all">
                        <Route path='/' exact component={Login} />
                        <Route path='/login' component={Login} />
                        <Route path='/register' component={Register} />
                        <Switch>
                            <PrivateRoute path='/home' exact component={Home} />
                            <PrivateRoute exact path="/calendar" component={Calendar} />
                            <PrivateRoute path='/archives' component={Archives} />
                        </Switch>
                        <Switch>
                            <AdminPrivateRoute exact path="/statistics" component={Statistics} />
                            <AdminPrivateRoute exact path="/confirmation" component={Confirmation} />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}
export default App;
