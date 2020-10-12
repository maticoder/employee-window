import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import onClickOutside from "react-onclickoutside";

import DatePickerCalendar from "../DatePickerCalendar/DatePickerCalendar";

import "./DatePicker.css";

import "moment/locale/pl";
moment.locale("pl");

class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogDate: this.props.selectedDate
                ? new Date(this.props.selectedDate)
                : new Date(),
            headerDate: this.props.selectedDate
                ? new Date(this.props.selectedDate)
                : new Date(),
        };
    }

    addMonth = () => {
        const currentDate = this.state.headerDate;
        this.setState({
            headerDate: new Date(
                currentDate.setMonth(currentDate.getMonth() + 1)
            ),
        });
    };

    removeMonth = () => {
        const currentDate = this.state.headerDate;
        this.setState({
            headerDate: new Date(
                currentDate.setMonth(currentDate.getMonth() - 1)
            ),
        });
    };

    setDialogDate = (date) => {
        this.setState({
            dialogDate: date,
        });
    };

    handleDialogAccept = () => {
        this.props.setSelectedDate(this.state.dialogDate);
        this.handleClickOutside();
    };

    handleClickOutside = () => this.props.handleDialogClose();

    render() {
        const { dialogDate, headerDate } = this.state;
        const { selectedDate, setSelectedDate } = this.props;

        const days = ["Ndz", "Pon", "Wt", "Śr", "Czw", "Pt", "Sob"];

        return (
            <div className="date-picker">
                <div className="date-picker-header">
                    <button onClick={this.removeMonth}>navigate_before</button>
                    <span>{moment(headerDate).format("MMMM YYYY")}</span>
                    <button onClick={this.addMonth}>navigate_next</button>
                </div>
                <div className="date-picker-days">
                    {days.map((day) => (
                        <span key={day} className="day">
                            {day}
                        </span>
                    ))}
                </div>
                <DatePickerCalendar
                    date={headerDate}
                    selectedDate={dialogDate}
                    setDate={this.setDialogDate}
                />
                <div className="date-picker-menu">
                    <button onClick={this.props.handleDialogClose}>
                        Cofnij
                    </button>
                    <button onClick={this.handleDialogAccept}>Ok</button>
                </div>
            </div>
        );
    }
}

DatePicker.propTypes = {
    selectedDate: PropTypes.instanceOf(Date),
    setSelectedDate: PropTypes.func,
    handleDialogClose: PropTypes.func,
};

export default onClickOutside(DatePicker);
