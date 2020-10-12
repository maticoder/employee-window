import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import "./DatePickerHeader.css";

function DatePickerHeader({ date }) {
    return (
        <div className="date-picker-header">
            <span className="year">{moment(date).format("YYYY")}</span>
            <span className="date">{moment(date).format("ddd, MMM D")}</span>
        </div>
    );
}

DatePickerHeader.propTypes = {
    date: PropTypes.instanceOf(Date),
};

export default DatePickerHeader;
