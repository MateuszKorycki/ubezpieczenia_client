import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Footer.css";
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";
class Footer extends Component {
    render() {
        return (

            <div className="container-footer">
                <div className="footer-social-media">

                    <Link className="socials" to='#' activeStyle>
                        <FontAwesomeIcon icon={faFacebook}  />
                    </Link>

                    <Link className="socials" to='#' activeStyle>
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>

                    <Link className="socials" to='#' activeStyle>
                        <FontAwesomeIcon icon={faTwitter} />
                    </Link>

                    <Link className="socials" to='#' activeStyle>
                        <FontAwesomeIcon icon={faYoutube} />
                    </Link>


                </div>

                <div className="footer-text">
                    <p>Wszelkie prawa zastrzeżone  {"©"}  {new Date().getFullYear()}</p>
                </div>
            </div>

        );
    }
}

export default Footer;
