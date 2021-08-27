import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { _auctionLoginUser_ } from "../../../actions/authActions";
import classnames from "classnames";
import "./Login.css";
class Login extends Component {
    constructor(requisite) {
        super(requisite);
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/home");
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    loginChangeOn_ (ev) {
        this.setState({ [ev.target.id]: ev.target.value });
    };
    loginSubmitOn_ (ev) {
        ev.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props._auctionLoginUser_(userData);
    };
    render() {
        const { errors } = this.state;
        return (
            <div className="container-login">
                <div className="row-login">
                <div className="tab-header">
                    <div className="l-title">Agencja Ubezpieczeniowa</div>
                    <div className="l-name">Logowanie</div>
                </div>
                <form className="tab-content" noValidate onSubmit={this.loginSubmitOn_.bind(this)}>
                    <div className="form-element element-login">
                        <input onChange={this.loginChangeOn_.bind(this)} value={this.state.email}  placeholder="E-mail" id="email" type="email"                   className={classnames("", {
                            invalid: errors.email || errors.emailnotfound})}/>
                        <span className="red-text">
                            {errors.email}
                            {errors.emailnotfound}
                        </span>
                    </div>
                    <div className="form-element element-login">
                        <input onChange={this.loginChangeOn_.bind(this)} value={this.state.password}  placeholder="Hasło" id="password" type="password"                   className={classnames("", {
                            invalid: errors.password || errors.passwordincorrect})}/>
                        <span className="red-text">
                            {errors.password}
                            {errors.passwordincorrect}
                            {errors.nonConfirmed}
                </span>
                    </div>
                    <div className="form-element">
                        <button type="submit">Zaloguj się</button>
                        <div className="l-quest">Nie masz konta?
                            <Link to={"/register"}><b> Zarejestruj się</b></Link>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}Login.propTypes = {
    _auctionLoginUser_: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { _auctionLoginUser_ }
)(Login);
