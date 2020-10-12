import React, { Component } from "react";
import PropTypes from "prop-types";

import DateInput from "../DateInput/DateInput";
import DateDialog from "../DateDialog/DateDialog";
import DatePicker from "../DatePicker/DatePicker";

import "./Date.css";

class Date extends Component {
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
        const { label, inputLabel, selectedDate, setSelectedDate } = this.props;
        const { open } = this.state;

        return (
            <div className="date">
                <DateInput
                    selectedDate={selectedDate}
                    onClick={this.handleDialogOpen}
                    label={label}
                    inputLabel={inputLabel}
                />
                <DateDialog open={open}>
                    <DatePicker
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                        handleDialogClose={this.handleDialogClose}
                    />
                </DateDialog>
            </div>
        );
    }
}

Date.propTypes = {
    label: PropTypes.string,
    inputLabel: PropTypes.string,
    selectedDate: PropTypes.instanceOf(Date),
    setSelectedDate: PropTypes.func,
};

export default Date;
