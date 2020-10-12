import React from "react";
import PropTypes from "prop-types";

import "./DatePickerDays.css";

function DatePickerDays({ days }) {
    return (
        <div className="date-picker-days">
            {days.map((day) => (
                <span key={day} className="day">
                    {day}
                </span>
            ))}
        </div>
    );
}

DatePickerDays.propTypes = {
    days: PropTypes.arrayOf(String),
};

export default DatePickerDays;
