import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import "./DateInput.css";

function DateInput({
    selectedFirstDate,
    selectedSecondDate,
    inputLabel,
    label,
    onClick,
}) {
    return (
        <div onClick={onClick} className="date-input">
            <span className="date-input-icon">event</span>
            <div className="date-input-content">
                <span className="date-input-label">{label}</span>
                <p className="date-input-date">
                    {selectedFirstDate && selectedSecondDate
                        ? `${moment(selectedFirstDate).format(
                              "D.MM.YY"
                          )} - ${moment(selectedSecondDate).format("D.MM.YY")}`
                        : inputLabel}
                </p>
            </div>
        </div>
    );
}

DateInput.propTypes = {
    selectedFirstDate: PropTypes.instanceOf(Date),
    selectedSecondDate: PropTypes.instanceOf(Date),
    label: PropTypes.string,
    inputLabel: PropTypes.string,
    onClick: PropTypes.func,
};

export default DateInput;
