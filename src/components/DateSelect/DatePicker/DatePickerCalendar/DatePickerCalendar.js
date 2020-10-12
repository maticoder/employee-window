import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import DatePickerCalendarCell from "./DatePickerCalendarCell/DatePickerCalendarCell";

import "./DatePickerCalendar.css";

function DatePickerCalendar({ selectedDate, navigationDate, setDate }) {
    const firstDay = moment(navigationDate).startOf("month").format("d");
    const lastDay = moment(navigationDate).endOf("month").format("D");

    const calendar = [];
    for (let i = 0; i < firstDay; i++) {
        calendar.push("");
    }
    for (let i = 0; i < lastDay; i++) {
        calendar.push(i + 1);
    }
    for (let i = lastDay; i < 42 - firstDay; i++) {
        calendar.push("");
    }

    const compareDate = (day) => {
        return (
            day.toString() === moment(selectedDate).format("D") &&
            moment(navigationDate).format("M YYYY") ===
                moment(selectedDate).format("M YYYY")
        );
    };

    return (
        <div className="date-picker-calendar">
            {calendar.map((day, index) => (
                <DatePickerCalendarCell
                    key={index}
                    day={day}
                    active={compareDate(day)}
                    onClick={() =>
                        setDate(new Date(navigationDate.setDate(day)))
                    }
                />
            ))}
        </div>
    );
}

DatePickerCalendar.propTypes = {
    selectedDate: PropTypes.instanceOf(Date),
    navigationDate: PropTypes.instanceOf(Date),
    setDate: PropTypes.func,
};

export default DatePickerCalendar;
