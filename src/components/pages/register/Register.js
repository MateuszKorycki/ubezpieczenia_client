import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { _auctionRegisterUser_ } from "../../../actions/authActions";
import classnames from "classnames";
import "./Register.css";
class Register extends Component {
    constructor(requisite) {
        super(requisite);
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    _changeOn_ (ev) {
        this.setState({ [ev.target.id]: ev.target.value });
    };

    _submitOn_ (ev) {
        ev.preventDefault();
        const newCustomer = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        this.props._auctionRegisterUser_(newCustomer, this.props.history);
    };
    render() {
        const { errors } = this.state;
        return (
            <div className="container-register">
                <div className="row-register">
                <div className="tab-header">
                    <div className="r-title">Agencja Ubezpieczeniowa</div>
                    <div className="r-name">Rejestracja</div>
                </div>
                <form className="tab-content-register" noValidate onSubmit={this._submitOn_.bind(this)}>
                    <div className="form-element element-register">
                        <input onChange={this._changeOn_.bind(this)} value={this.state.name}  id="name" placeholder="Podaj imię i nazwisko"
                               type="text" className={classnames("", {invalid: errors.name})}/>
                        <span className="red-text">{errors.name}</span>
                    </div>
                    <div className="form-element element-register">
                        <input onChange={this._changeOn_.bind(this)} value={this.state.email}  id="email" placeholder="Podaj e-mail"
                               type="email" className={classnames("", {invalid: errors.email})}/>
                        <span className="red-text">{errors.email}</span>
                    </div>
                    <div className="form-element element-register">
                        <input onChange={this._changeOn_.bind(this)} value={this.state.password}
                               id="password" placeholder="Podaj hasło" type="password" className={classnames("",
                            {invalid: errors.password})}/>
                        <span className="red-text">{errors.password}</span>
                    </div>
                    <div className="form-element element-register">
                        <input onChange={this._changeOn_.bind(this)} value={this.state.password2}
                               id="password2" placeholder="Powtórz hasło" type="password" className={classnames("", {invalid: errors.password2})}/>
                        <span className="red-text">{errors.password2}</span>
                    </div>
                    <div className="form-element ">
                        <button type="submit" onClick={this._changeOn_.bind(this)}>Zarejestruj się</button>
                        <div className="r-quest">Posiadasz konto?
                        <Link to={"/login"}><b> Zaloguj się</b></Link>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}
Register.propTypes = {
    _auctionRegisterUser_: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { _auctionRegisterUser_ }
)(withRouter(Register));
