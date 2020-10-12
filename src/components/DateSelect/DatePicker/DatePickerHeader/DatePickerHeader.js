import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import "./DatePickerHeader.css";

function DatePickerHeader({ dateFirst, dateSecond }) {
    return (
        <div className="date-picker-header">
            {dateFirst && (
                <div className="date">
                    <span className="year">
                        {moment(dateFirst).format("YYYY")}
                    </span>
                    <span className="month-day">
                        {moment(dateFirst).format("MMM D")}
                    </span>
                </div>
            )}
            {dateSecond && (
                <div className="date">
                    <span className="year">
                        {moment(dateSecond).format("YYYY")}
                    </span>
                    <span className="month-day">
                        {moment(dateSecond).format("D MMM")}
                    </span>
                </div>
            )}
        </div>
    );
}

DatePickerHeader.propTypes = {
    dateFirst: PropTypes.instanceOf(Date),
    dateSecond: PropTypes.instanceOf(Date),
};

export default DatePickerHeader;
