import React from "react";
import PropTypes from "prop-types";

import "./DatePickerMenu.css";

function DatePickerMenu({ handleAccept, handleReject }) {
    return (
        <div className="date-picker-menu">
            <button onClick={handleReject}>Cofnij</button>
            <button onClick={handleAccept}>Ok</button>
        </div>
    );
}

DatePickerMenu.propTypes = {
    handleAccept: PropTypes.func,
    handleReject: PropTypes.func,
};

export default DatePickerMenu;
