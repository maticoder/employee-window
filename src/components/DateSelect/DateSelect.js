import React, { Component } from "react";
import PropTypes from "prop-types";

import DateInput from "./DateInput/DateInput";
import DateDialog from "./DateDialog/DateDialog";
import DatePicker from "./DatePicker/DatePicker";

import "./DateSelect.css";

class DateSelect extends Component {
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
        const {
            label,
            inputLabel,
            selectedFirstDate,
            setSelectedFirstDate,
            selectedSecondDate,
            setSelectedSecondDate,
        } = this.props;
        const { open } = this.state;

        return (
            <div className="date">
                <DateInput
                    selectedFirstDate={selectedFirstDate}
                    selectedSecondDate={selectedSecondDate}
                    onClick={this.handleDialogOpen}
                    label={label}
                    inputLabel={inputLabel}
                />
                <DateDialog open={open}>
                    <DatePicker
                        selectedFirstDate={selectedFirstDate}
                        setSelectedFirstDate={setSelectedFirstDate}
                        selectedSecondDate={selectedSecondDate}
                        setSelectedSecondDate={setSelectedSecondDate}
                        handleDialogClose={this.handleDialogClose}
                    />
                </DateDialog>
            </div>
        );
    }
}

DateSelect.propTypes = {
    label: PropTypes.string,
    inputLabel: PropTypes.string,
    selectedFirstDate: PropTypes.instanceOf(Date),
    setSelectedFirstDate: PropTypes.func,
    selectedSecondDate: PropTypes.instanceOf(Date),
    setSelectedSecondDate: PropTypes.func,
};

export default DateSelect;
