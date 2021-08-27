import React from "react";
import "./Calendar.css";
import Footer from "../../layout/footer/Footer";
import Navbar from "../../layout/header/Navbar";
import format from "date-fns/format";
import addMonths from "date-fns/addMonths";
import subMonths from "date-fns/subMonths";
import startOfWeek from "date-fns/startOfWeek";
import endOfWeek from "date-fns/endOfWeek";
import addDays from "date-fns/addDays";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";
import isSameMonth from "date-fns/isSameMonth";
import isSameDay from "date-fns/isSameDay";
import parseISO from "date-fns/parseISO";
import { pl } from "date-fns/locale";
import {connect} from "react-redux";
import axios from "axios";
import TextField from '@material-ui/core/TextField';

const NEW_EVENT_DEFAULT_VALUE = "2021-08-01T10:30";

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.onDateClickBind = this.onDateClick.bind(this);
        this.state = {
            currentMonth: new Date(),
            selectedDate: new Date(),
            meetings: [],
            pickedMeeting: {},
            newEventTitle: "",
            newEventDescription: "",
            newEventDate: NEW_EVENT_DEFAULT_VALUE,
            pickedEvent: {},
            showEditBox: false
        };
    }

    componentDidMount() {
        axios.get(`/api/meetings/${this.props.auth.user.id}`).then( res => {
            this.setState({meetings: res.data});
        }).catch(err => {
            console.log(err);
        });
    }

    addEvent() {
        const data = {
            eventTitle: this.state.newEventTitle,
            authorId: this.props.auth.user.id,
            eventDescription: this.state.newEventDescription,
            date: this.state.newEventDate,
            status: "active"
        };

        axios.post("http://localhost:5000/api/meetings/add", data).then((res) => {
            window.location.reload(true);
        }).catch(res => {
            console.log(res);
        });
    }

    onEventClick(id) {
        const pickedEvent = this.state.meetings.find((meeting) => meeting._id === id);
        this.setState({
            pickedEvent: {
                title: pickedEvent.eventTitle,
                description: pickedEvent.eventDescription,
                id,
                date: pickedEvent.date
            }
        })
    }

    onCancelEventClick(id) {
        axios.put(`http://localhost:5000/api/meetings/cancel/${id}`).then(res => {
            window.location.reload(true);
        }).catch(res => {
            console.log(res.data)
        })
    }

    onEditEventClick() {
        axios.put(`http://localhost:5000/api/meetings/edit/${this.state.pickedEvent.id}`, this.state.pickedEvent).then(res => {
            window.location.reload(true);
            this.setState({showEditBox: false});
        }).catch(res => {
            console.log(res.data)
        })
    }

    renderNavbar() {

        return (
            <div>
                <Navbar/>
            </div>
        );
    }

    renderHeader() {
        const dateFormat = "LLLL yyyy";

        return (

            <div className={""}>
                <div className={"header-calendar"}>
                    <i className="fas fa-arrow-left check-calendar" onClick={this.prevMonth}></i>
                    <div>
                        <span> {format(this.state.currentMonth, dateFormat, { locale: pl})}</span>
                    </div>
                    <i className="fas fa-arrow-right check-calendar" onClick={this.nextMonth}></i>
                </div>
                <div>
                </div>
            </div>

        );
    }

    renderDays() {
        const dateFormat = "iiiiiii";
        const days = [];

        let startDate = startOfWeek(this.state.currentMonth);

        for (let i = 1; i < 8; i++) {
            days.push(
                <div className="titleDays" key={i}>
                    {format(addDays(startDate, i), dateFormat, {locale: pl})}
                </div>
            );
        }

        return <div className="week">{days}</div>;
    }

    renderCells() {
        const { currentMonth, selectedDate } = this.state;
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart ,{weekStartsOn: 1});
        const endDate = endOfWeek(monthEnd);
        const dateFormat = "dd";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "pl";
        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, dateFormat);
                const cloneDay = day;
                const meetingDay = this.state.meetings?.filter(tD => {
                    return isSameDay(day, parseISO(tD.date)) && tD.status !== "canceled";
                });
                days.push(
                    <div
                        className={`${
                            !isSameMonth(day, monthStart)
                                ? "day day--disabled"
                                : isSameDay(day, selectedDate) ? "day day--selected" : "day day__card"
                        }`}
                        key={day}
                        onClick={(evt) => this.onDateClick(cloneDay)}
                    >
                        <span className="day-date">{formattedDate}</span>
                        <div className={"day__meetings"}>
                            {
                                meetingDay.map((md, i) => {
                                    if (i < 5) {
                                        return (
                                            <div
                                                className={"day__meetings-item" }
                                                onClick={(evt) => this.onEventClick(md._id)}
                                                key={i}>{md.eventTitle}
                                            </div>)
                                    }
                                })

                            }
                        </div>
                    </div>
                );

                day = addDays(day, 1 );
            }
            rows.push(
                <div className="calendar-element " key={day}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div className="body">{rows}</div>;
    }

    renderFooter() {

        return (
            <div>
                <Footer/>
            </div>
        );
    }

    onDateClick(day) {
        this.setState({
            selectedDate: day
        });

        const meetingDay = this.state.meetings?.filter(tD => {
            return isSameDay(day, parseISO(tD.date));
        });

        this.setState({
            pickedMeeting: meetingDay[0] || {}
        });
    }

    nextMonth = () => {
        this.setState({
            currentMonth: addMonths(this.state.currentMonth, 1)
        });
    };

    prevMonth = () => {
        this.setState({
            currentMonth: subMonths(this.state.currentMonth, 1)
        });
    };

    onNewEventTitleChange = (evt) => {
        this.setState({newEventTitle: evt.target.value});
    }

    onNewEventDescChange = (evt) => {
        this.setState({newEventDescription: evt.target.value});
    }

    onNewEventDateChange = (evt) => {
        this.setState({newEventDate: evt.target.value})
    }

    onPickedEventTitleChange = (evt) => {
        const pE = this.state.pickedEvent;
        pE['title'] = evt.target.value;
        this.setState({pickedEvent: pE});
    }

    onPickedEventDescChange = (evt) => {
        const pE = this.state.pickedEvent;
        pE['description'] = evt.target.value;
        this.setState({pickedEvent: pE});
    }

    onPickedEventDateChange = (evt) => {
        const pE = this.state.pickedEvent;
        pE['date'] = evt.target.value;
        this.setState({pickedEvent: pE})
    }

    render() {
        let d, ye, mo, da, h, m;
        if (this.state.pickedEvent.date) {
            d = new Date(this.state.pickedEvent.date);
            ye = new Intl.DateTimeFormat('pl', { year: 'numeric' }).format(d);
            mo = new Intl.DateTimeFormat('pl', { month: '2-digit' }).format(d);
            da = new Intl.DateTimeFormat('pl', { day: '2-digit' }).format(d);
            h = new Intl.DateTimeFormat('pl', { hour: '2-digit' }).format(d);
            m = new Intl.DateTimeFormat('pl', { minute: '2-digit' }).format(d);

            if (m.length === 1) m = `0${m}`;
        }

        return (
            <div>
                {this.renderNavbar()}
                <div className={"row-calendar-form"}>
                    <div className={"container-calendar"}>
                        {this.renderHeader()}
                        {this.renderDays()}
                        {this.renderCells()}
                        { Object.keys(this.state.pickedMeeting).length > 0 &&
                        <div className={"Calendar-meeting-info"}>
                            <div className={"Calendar-meeting-info-icon"}>
                            </div>
                            <div>
                                <div className={"Calendar-meeting-info-row"}>
                                    <div className={"Calendar-meeting-info-title"}>
                                        { this.state.pickedMeeting?.eventName }
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                    <div className={"calendar-form"}>
                        <div className={"calendar_contents_event-preview"}>
                            <div className={"calendar_contents_event-preview-header"}>Wybrane spotkanie:</div>
                            {
                                Object.keys(this.state.pickedEvent).length === 0 &&
                                    <div className={"calendar_contents_event-placeholder"}>Kliknij w spotkanie aby zobaczyć szczegóły.</div>
                            }
                            <div className={"calendar_contents_event-preview-title"}>{ this.state.pickedEvent.title }</div>
                            <div className={"calendar_contents_event-preview-description"}>
                                { this.state.pickedEvent.description }
                            </div>
                            <div className={"calendar_contents_event-preview-date"}>
                                {
                                    this.state.pickedEvent.date ? `${da}/${mo}/${ye}, godz. ${h}:${m}` : ''
                                }
                            </div>
                            { Object.keys(this.state.pickedEvent).length !== 0 &&
                                <>
                                    <button className={"calendar_contents_event-preview-button"}
                                        onClick={() => this.setState({showEditBox: true})}>Edytuj</button>
                                    <button className={"calendar_contents_event-preview-button"}
                                            onClick={(evt) => this.onCancelEventClick(this.state.pickedEvent.id)}>Odwołaj</button>
                                </>
                            }

                        </div>
                        { this.state.showEditBox &&
                            <form>
                                <div className={"calendar_contents_event"}>
                                    <h2>Edytuj event</h2>
                                    <input placeholder={"Tytuł"} value={this.state.pickedEvent.title}
                                           onChange={this.onPickedEventTitleChange.bind(this)}/>
                                    <textarea placeholder={"Opis"} value={this.state.pickedEvent.description}
                                              onChange={this.onPickedEventDescChange.bind(this)}></textarea>
                                    <form noValidate>
                                        <TextField
                                            id="datetime-local"
                                            label="Data"
                                            type="datetime-local"
                                            value={this.state.pickedEvent.date}
                                            defaultValue={NEW_EVENT_DEFAULT_VALUE}
                                            onChange={this.onPickedEventDateChange.bind(this)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </form>
                                    <div className={"calendar_menu_event"}>
                                        <i className="fas fa-plus btw_calendar" onClick={this.onEditEventClick.bind(this)}>Aktualizuj zmiany</i>
                                    </div>
                                </div>
                            </form>
                        }
                        {!this.state.showEditBox &&
                        <form>
                            <div className={"calendar_contents_event"}>
                                <h2>Dodaj nowy event</h2>
                                <input placeholder={"Tytuł"} value={this.state.newEventTitle}
                                       onChange={this.onNewEventTitleChange.bind(this)}/>
                                <textarea placeholder={"Opis"} value={this.state.newEventDescription}
                                          onChange={this.onNewEventDescChange.bind(this)}></textarea>
                                <form noValidate>
                                    <TextField
                                        id="datetime-local"
                                        label="Data"
                                        type="datetime-local"
                                        defaultValue={NEW_EVENT_DEFAULT_VALUE}
                                        value={this.state.newEventDate}
                                        onChange={this.onNewEventDateChange.bind(this)}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </form>
                                <div className={"calendar_menu_event"}>
                                    <i className="fas fa-plus btw_calendar"
                                       onClick={this.addEvent.bind(this)}> Dodaj</i>
                                </div>
                            </div>
                        </form>
                        }
                    </div>
                </div>
                {this.renderFooter()}
            </div>
        );
    }
}

const mapProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapProps)(Calendar);
