import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import DatePickerCalendarCell from "./DatePickerCalendarCell/DatePickerCalendarCell";

import "./DatePickerCalendar.css";

function DatePickerCalendar({
    selectedFirstDate,
    selectedSecondDate,
    navigationDate,
    setDate,
    lastHovered,
    setLastHovered,
}) {
    const firstDay = moment(navigationDate).startOf("month").format("d");
    const lastDay = moment(navigationDate).endOf("month").format("D");

    const calendar = [];
    for (let i = 0; i < firstDay; i++) {
        calendar.push(null);
    }
    for (let i = 0; i < lastDay; i++) {
        calendar.push(
            new Date(
                `${navigationDate.getFullYear()}-${
                    navigationDate.getMonth() + 1
                }-${i + 1}`
            )
        );
    }
    for (let i = lastDay; i < 42 - firstDay; i++) {
        calendar.push(null);
    }

    const compareDate = (date) => {
        return (
            moment(date).format("YYYY MM DD") ===
                moment(selectedFirstDate).format("YYYY MM DD") ||
            moment(date).format("YYYY MM DD") ===
                moment(selectedSecondDate).format("YYYY MM DD")
        );
    };

    return (
        <div className="date-picker-calendar">
            {calendar.map((date, index) => (
                <DatePickerCalendarCell
                    key={index}
                    date={date}
                    active={compareDate(date)}
                    highlight={
                        (date > selectedFirstDate &&
                            date < selectedSecondDate) ||
                        (selectedSecondDate === null &&
                            date < lastHovered &&
                            date > selectedFirstDate)
                    }
                    onClick={() => setDate(date)}
                    onMouseOver={() => setLastHovered(date)}
                />
            ))}
        </div>
    );
}

DatePickerCalendar.propTypes = {
    selectedFirstDate: PropTypes.instanceOf(Date),
    selectedSecondDate: PropTypes.instanceOf(Date),
    navigationDate: PropTypes.instanceOf(Date),
    setDate: PropTypes.func,
    lastHovered: PropTypes.instanceOf(Date),
    setLastHoveredq: PropTypes.func,
};

export default DatePickerCalendar;
