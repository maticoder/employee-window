import React from "react";
import PropTypes from "prop-types";

import "./DatePickerMenu.css";

function DatePickerMenu({ disabled, handleAccept, handleReject }) {
    return (
        <div className="date-picker-menu">
            <button onClick={handleReject}>Cofnij</button>
            <button
                className={disabled ? "disabled" : ""}
                disabled={disabled}
                onClick={handleAccept}
            >
                Ok
            </button>
        </div>
    );
}

DatePickerMenu.propTypes = {
    disabled: PropTypes.bool,
    handleAccept: PropTypes.func,
    handleReject: PropTypes.func,
};

export default DatePickerMenu;
