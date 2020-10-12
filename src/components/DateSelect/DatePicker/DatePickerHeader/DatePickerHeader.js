import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import "./DatePickerHeader.css";

function DatePickerHeader({ date, addMonth, removeMonth }) {
    return (
        <div className="date-picker-header">
            <button onClick={removeMonth}>navigate_before</button>
            <span>{moment(date).format("MMMM YYYY")}</span>
            <button onClick={addMonth}>navigate_next</button>
        </div>
    );
}

DatePickerHeader.propTypes = {
    date: PropTypes.instanceOf(Date),
    addMonth: PropTypes.func,
    removeMonth: PropTypes.func,
};

export default DatePickerHeader;
