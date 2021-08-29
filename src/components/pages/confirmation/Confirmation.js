import React from 'react';
import Footer from "../../layout/footer/Footer";
import Navbar from "../../layout/header/Navbar";
import axios from "axios";
import "./Confirmation.css";
import {connect} from "react-redux";

class Confirmation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            meetings: [],
            users: []
        }
    }

    componentDidMount() {
        axios.get(`https://ubezpieczenia-server.herokuapp.com/api/users`).then( res => {
            this.setState({users: res.data})
        }).catch(err => {
            console.log(err);
        });
    }

    getPendingAgents() {
        return this.state.users.filter(user => !user.confirmed);
    }

    getCanceledMeetings() {
        return this.state.meetings.filter(meeting => meeting.status === "canceled");
    }

    onConfirmButtonClick(id) {
        axios.put(`https://ubezpieczenia-server.herokuapp.com/api/users/confirm/${id}`).then(res => {
            window.location.reload(true);
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className={"Confirmation"}>
                <Navbar/>
                <div className="Confirmation-container">
                    <h1>Agenci</h1>
                    <div className={"Confirmation__box"}>
                        <h2>Oczekujący agenci ({ this.getPendingAgents().length })</h2>
                        <ul>
                            {
                                this.getPendingAgents().map((user, index) => {
                                    return <li className={"Confirmation__box-item"} key={index}>
                                        <div className={"Confirmation__box-item-title"}>{ user.name }</div>
                                        <div className={"Confirmation__box-item-description"}>{ user.email }</div>
                                        <button className={"Confirmation__box-button"}
                                                onClick={(evt) => this.onConfirmButtonClick(user._id)}>
                                            Akceptuj
                                        </button>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapProps)(Confirmation);