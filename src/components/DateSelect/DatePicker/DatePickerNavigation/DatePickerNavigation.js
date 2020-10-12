import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import "./DatePickerNavigation.css";

function DatePickerNavigation({ date, addMonth, removeMonth }) {
    return (
        <div className="date-picker-navigation">
            <button onClick={removeMonth}>navigate_before</button>
            <span>{moment(date).format("MMMM YYYY")}</span>
            <button onClick={addMonth}>navigate_next</button>
        </div>
    );
}

DatePickerNavigation.propTypes = {
    date: PropTypes.instanceOf(Date),
    addMonth: PropTypes.func,
    removeMonth: PropTypes.func,
};

export default DatePickerNavigation;
