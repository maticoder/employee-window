import React from "react";
import PropTypes from "prop-types";

import "./DatePickerCalendarCell.css";

function DatePickerCalendarCell({ date, active, highlight, onClick }) {
    return date ? (
        <span
            className={`cell non-empty-cell ${active ? "active" : ""} ${
                highlight ? "highlight" : ""
            }`}
            onClick={onClick}
        >
            {date.getDate()}
        </span>
    ) : (
        <span className="cell"></span>
    );
}

DatePickerCalendarCell.propTypes = {
    date: PropTypes.instanceOf(Date),
    active: PropTypes.bool,
    highlight: PropTypes.bool,
    onClick: PropTypes.func,
};

export default DatePickerCalendarCell;
