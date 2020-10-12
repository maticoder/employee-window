import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import "./DatePickerCalendar.css";

function DatePickerCalendar({ date, selectedDate, setDate }) {
    const firstDay = moment(date).startOf("month").format("d");
    const lastDay = moment(date).endOf("month").format("D");

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
            moment(date).format("M YYYY") ===
                moment(selectedDate).format("M YYYY")
        );
    };

    return (
        <div className="date-picker-calendar">
            {calendar.map((day, index) =>
                day !== "" ? (
                    <span
                        key={index}
                        className="cell non-empty-cell"
                        className={`cell non-empty-cell ${
                            compareDate(day) ? "active" : ""
                        }`}
                        onClick={() => setDate(new Date(date.setDate(day)))}
                    >
                        {day}
                    </span>
                ) : (
                    <span key={index} className="cell">
                        {day}
                    </span>
                )
            )}
        </div>
    );
}

DatePickerCalendar.propTypes = {
    date: PropTypes.instanceOf(Date),
    selectedDate: PropTypes.instanceOf(Date),
    setDate: PropTypes.func,
};

export default DatePickerCalendar;
