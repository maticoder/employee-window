import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import onClickOutside from "react-onclickoutside";

import DatePickerHeader from "./DatePickerHeader/DatePickerHeader";
import DatePickerNavigation from "./DatePickerNavigation/DatePickerNavigation";
import DatePickerDays from "./DatePickerDays/DatePickerDays";
import DatePickerCalendar from "./DatePickerCalendar/DatePickerCalendar";
import DatePickerMenu from "./DatePickerMenu/DatePickerMenu";
import DatePickerContent from "./DatePickerContent/DatePickerContent";

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

        return (
            <div className="date-picker">
                <DatePickerHeader date={dialogDate} />
                <DatePickerContent>
                    <DatePickerNavigation
                        date={headerDate}
                        addMonth={this.addMonth}
                        removeMonth={this.removeMonth}
                    />
                    <DatePickerDays
                        days={["Ndz", "Pon", "Wt", "Śr", "Czw", "Pt", "Sob"]}
                    />
                    <DatePickerCalendar
                        date={headerDate}
                        selectedDate={dialogDate}
                        setDate={this.setDialogDate}
                    />
                    <DatePickerMenu
                        handleAccept={this.handleDialogAccept}
                        handleReject={this.handleClickOutside}
                    />
                </DatePickerContent>
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
