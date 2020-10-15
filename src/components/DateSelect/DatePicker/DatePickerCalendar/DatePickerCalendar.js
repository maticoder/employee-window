import React from "react";
import PropTypes from "prop-types";

import { getCalendar, compareDate } from "../../../../util/date";

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
    const calendar = getCalendar(navigationDate);

    return (
        <div className="date-picker-calendar">
            {calendar.map((date, index) => (
                <DatePickerCalendarCell
                    key={index}
                    date={date}
                    active={compareDate(
                        date,
                        selectedFirstDate,
                        selectedSecondDate
                    )}
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
