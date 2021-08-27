import React from 'react';
import Footer from "../../layout/footer/Footer";
import Navbar from "../../layout/header/Navbar";
import axios from "axios";
import "./Statistics.css";
import {connect} from "react-redux";

class Statistics extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            meetings: [],
            meetingsCopy: [],
            users: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/meetings/`).then( res => {
            this.setState({meetings: res.data, meetingsCopy: res.data})
        }).catch(err => {
            console.log(err);
        });

        axios.get(`http://localhost:5000/api/users/`).then( res => {
            this.setState({users: res.data})
        }).catch(err => {
            console.log(err);
        });
    }

    getAuthorName(id) {
        return this.state.users.find(user => user._id === id)?.name;
    }

    getActiveMeetings() {
        return this.state.meetings.filter(meeting => meeting.status === "active");
    }

    getCanceledMeetings() {
        return this.state.meetings.filter(meeting => meeting.status === "canceled");
    }

    onAgentSelectActiveChange(evt) {
        if (evt.target.value !== "all") {
            const meetingsFiltered = this.state.meetingsCopy.filter(meeting => meeting.authorId === evt.target.value);
            this.setState({meetings: meetingsFiltered});
        } else {
            this.setState({meetings: this.state.meetingsCopy});
        }
    }

    onAgentInputActiveChange(evt) {
        if (evt.target.value !== "") {
            const regexp = new RegExp(`^${evt.target.value}`);
            const meetingsFiltered = this.state.meetingsCopy
                .filter(meeting => regexp.test(meeting.eventTitle.toLowerCase()));
            this.setState({meetings: meetingsFiltered});
        } else {
            this.setState({meetings: this.state.meetingsCopy});
        }
    }

    render() {
        return (
            <div className={"Statistics"}>
                <Navbar/>
                <div className="statistics-container">
                    <h1>Statystyki</h1>
                    <div className={"Statistics__filter-items"}>
                        <div className={"Statistics__filter-item"}>
                            <div className={"Statistics__filter-item-label"}>Agent</div>
                            <select onChange={this.onAgentSelectActiveChange.bind(this)}>
                                <option default value={"all"}>Wszyscy</option>
                                {
                                    this.state.users.map(user => {
                                        return (
                                            <option value={user._id}>{user.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className={"Statistics__filter-item"}>
                            <div className={"Statistics__filter-item-label"}>Tytuł spotkania</div>
                            <input placeholder={"Wpisz tytuł"} onChange={this.onAgentInputActiveChange.bind(this)}/>
                        </div>
                    </div>
                    <div className={"Statistics__box"}>
                        <h2>Aktywne spotkania ({this.getActiveMeetings().length})</h2>
                        { this.getActiveMeetings().length === 0 &&
                            <div>Brak spotkań</div>
                        }
                        <ul>
                            {
                                this.getActiveMeetings().map((meeting, index) => {
                                    return <li className={"Statistics__box-item"} key={index}>
                                        <div className={"Statistics__box-item-title"}>{ meeting.eventTitle }</div>
                                        <div className={"Statistics__box-item-description"}>{ meeting.eventDescription}</div>
                                        <div className={"Statistics__box-item-author"}>
                                            { this.getAuthorName(meeting.authorId)}
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className={"Statistics__box"}>
                        <h2>Odwołane spotkania ({this.getCanceledMeetings().length})</h2>
                        { this.getCanceledMeetings().length === 0 &&
                        <div>Brak spotkań</div>
                        }
                        <ul>
                            {
                                this.getCanceledMeetings().map((meeting, index) => {
                                    return <li className={"Statistics__box-item"} key={index}>
                                        <div className={"Statistics__box-item-title"}>{ meeting.eventTitle }</div>
                                        <div className={"Statistics__box-item-description"}>{ meeting.eventDescription}</div>
                                        <div className={"Statistics__box-item-author"}>
                                            { this.getAuthorName(meeting.authorId)}
                                        </div>
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

export default connect(mapProps)(Statistics);