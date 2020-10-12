import React from "react";
import PropTypes from "prop-types";

import "./CalendarInput.css";

function CalendarInput({ inputLabel, label, onClick }) {
    return (
        <div onClick={onClick} className="calendar-input">
            <span className="calendar-input-icon">event</span>

            <div className="calendar-input-content">
                <span className="calendar-input-label">{label}</span>
                <p className="calendar-input-date">1.05 - 30.05</p>
            </div>
        </div>
    );
}

CalendarInput.propTypes = {
    label: PropTypes.string,
    inputLabel: PropTypes.string,
    onClick: PropTypes.func,
};

export default CalendarInput;
