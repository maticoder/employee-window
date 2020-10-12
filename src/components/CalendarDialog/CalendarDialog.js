import React from "react";
import PropTypes from "prop-types";

import CalendarPicker from "../CalendarPicker/CalendarPicker";

import "./CalendarDialog.css";

function CalendarDialog({ open, handleDialogClose }) {
    return (
        open && (
            <div className="calendar-dialog">
                <CalendarPicker handleDialogClose={handleDialogClose} />
            </div>
        )
    );
}

CalendarDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    handleDialogClose: PropTypes.func,
};

export default CalendarDialog;
