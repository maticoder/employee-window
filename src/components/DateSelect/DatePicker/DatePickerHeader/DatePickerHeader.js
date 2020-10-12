import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import "./DatePickerHeader.css";

function DatePickerHeader({ date }) {
    return (
        <div className="date-picker-header">
            <div className="date">
                <span className="year">{moment(date).format("YYYY")}</span>
                <span className="month-day">
                    {moment(date).format("MMM D")}
                </span>
            </div>
            {/* <div className="date">
                <span className="year">
                    {moment(new Date()).format("YYYY")}
                </span>
                <span className="month-day">
                    {moment(new Date()).format("D MMM")}
                </span>
            </div> */}
        </div>
    );
}

DatePickerHeader.propTypes = {
    date: PropTypes.instanceOf(Date),
};

export default DatePickerHeader;
