import React, { Component } from "react";
import PropTypes from "prop-types";
import onClickOutside from "react-onclickoutside";

import "./CalendarPicker.css";

class CalendarPicker extends Component {
    handleClickOutside = () => this.props.handleDialogClose();

    render() {
        return <div className="calendar-picker"></div>;
    }
}

CalendarPicker.propTypes = {
    handleDialogClose: PropTypes.func,
};

export default onClickOutside(CalendarPicker);
