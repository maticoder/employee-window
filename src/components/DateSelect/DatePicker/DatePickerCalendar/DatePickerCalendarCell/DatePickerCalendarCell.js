import React from "react";
import PropTypes from "prop-types";

import "./DatePickerCalendarCell.css";

function DatePickerCalendarCell({ day, active, onClick }) {
    return day !== "" ? (
        <span
            className={`cell non-empty-cell ${active ? "active" : ""}`}
            onClick={onClick}
        >
            {day}
        </span>
    ) : (
        <span className="cell">{day}</span>
    );
}

DatePickerCalendarCell.propTypes = {
    day: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func,
};

export default DatePickerCalendarCell;
