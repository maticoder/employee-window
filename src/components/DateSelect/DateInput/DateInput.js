import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import "./DateInput.css";

function DateInput({ selectedDate, inputLabel, label, onClick }) {
    return (
        <div onClick={onClick} className="date-input">
            <span className="date-input-icon">event</span>

            <div className="date-input-content">
                <span className="date-input-label">{label}</span>
                <p className="date-input-date">
                    {selectedDate
                        ? moment(selectedDate).format("D.MM.YY")
                        : inputLabel}
                </p>
            </div>
        </div>
    );
}

DateInput.propTypes = {
    selectedDate: PropTypes.instanceOf(Date),
    label: PropTypes.string,
    inputLabel: PropTypes.string,
    onClick: PropTypes.func,
};

export default DateInput;
