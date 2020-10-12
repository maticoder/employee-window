import React from "react";
import PropTypes from "prop-types";

import "./DateDialog.css";

function DateDialog({ open, children }) {
    return open && <div className="date-dialog">{children}</div>;
}

DateDialog.propTypes = {
    open: PropTypes.bool.isRequired,
};

export default DateDialog;
