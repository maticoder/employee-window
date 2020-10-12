import React, { Component } from "react";
import PropTypes from "prop-types";

import CalendarInput from "../CalendarInput/CalendarInput";
import CalendarDialog from "../CalendarDialog/CalendarDialog";

import "./Calendar.css";

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    handleDialogOpen = () => {
        this.setState({
            open: true,
        });
    };

    handleDialogClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { label, inputLabel } = this.props;
        const { open } = this.state;

        return (
            <div className="calendar">
                <CalendarInput
                    onClick={this.handleDialogOpen}
                    label={label}
                    inputLabel={inputLabel}
                />
                <CalendarDialog
                    open={open}
                    handleDialogClose={this.handleDialogClose}
                />
            </div>
        );
    }
}

Calendar.propTypes = {
    label: PropTypes.string,
    inputLabel: PropTypes.string,
};

export default Calendar;
