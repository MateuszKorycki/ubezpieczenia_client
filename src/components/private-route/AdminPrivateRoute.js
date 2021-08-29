import React, {Fragment, useEffect, useState} from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";

export class AdminPrivateRoute extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            role: ""
        }

    }

    componentDidMount() {
        axios.get(`https://ubezpieczenia-server.herokuapp.com/api/users/${this.props.auth.user.id}`).then( res => {
            this.setState({role: res.data.role})
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <Fragment>
                { this.state?.role &&
                    <Route
                        render={() =>
                            this.state?.role === "admin" ? (
                                <this.props.component {...this.props} />
                            ) : (
                                <Redirect to="/" />
                            )
                        }
                    />
                }
            </Fragment>
        )
    }

}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(AdminPrivateRoute);
