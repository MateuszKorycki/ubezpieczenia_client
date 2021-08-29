import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import axios from "axios";

class Navbar extends Component {
    componentDidMount() {
        axios.get(`https://ubezpieczenia-server.herokuapp.com/api/users/${this.props.auth.user.id}`).then( res => {
            this.setState({role: res.data.role})
        }).catch(err => {
            console.log(err);
        });
    }
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };


    render() {
        const { user } = this.props.auth;
        return (

            <nav>
                <div className="nav-container">

                    <div className="nav-logo " to='/'>
                        <p>Agencja Ubezpieczeniowa</p>
                    </div >
                    <div className="bars"><FaBars/></div>

                    <div className="nav-menu">
                        <Link className="nv-element nv" to='/home' activeStyle>
                            Strona Główna
                        </Link>

                        <Link className="nv-element nv" to='/calendar' activeStyle>
                            Kalendarz
                        </Link>

                        { this.state?.role === "admin" &&
                        <Link className="nv-element nv" to='/statistics' >
                            Statystyki
                        </Link>
                        }

                        { this.state?.role === "admin" &&
                        <Link className="nv-element nv" to='/confirmation' >
                            Agenci
                        </Link>
                        }

                        <Link className="nv-element nv" to='/archives' activeStyle>
                            Archiwum
                        </Link>
                        <div className="nv-login nav-menu">
                            <div className="nickname-home">
                                <b>Cześć, </b> {user.name.split(" ")[0]}
                            </div>

                            <i className="fas fa-power-off nv-plus"  onClick={this.onLogoutClick}></i>

                        </div>
                    </div>
                </div>
            </nav>

        );
    }
}
Navbar.propTypes = {
    logoutUserAuth: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Navbar);

