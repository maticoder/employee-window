import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import onClickOutside from "react-onclickoutside";

import DatePickerHeader from "./DatePickerHeader/DatePickerHeader";
import DatePickerNavigation from "./DatePickerNavigation/DatePickerNavigation";
import DatePickerDays from "./DatePickerDays/DatePickerDays";
import DatePickerCalendar from "./DatePickerCalendar/DatePickerCalendar";
import DatePickerMenu from "./DatePickerMenu/DatePickerMenu";
import DatePickerContent from "./DatePickerContent/DatePickerContent";

import "./DatePicker.css";

import "moment/locale/pl";
moment.locale("pl");

class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogFirstDate: this.props.selectedFirstDate
                ? new Date(this.props.selectedFirstDate)
                : new Date(),
            dialogSecondDate: this.props.selectedSecondDate
                ? new Date(this.props.selectedSecondDate)
                : null,
            navigationDate: this.props.selectedFirstDate
                ? new Date(this.props.selectedFirstDate)
                : new Date(),
            lastHovered: null,
        };
    }

    addMonth = () => {
        const currentDate = this.state.navigationDate;
        this.setState({
            navigationDate: new Date(
                currentDate.setMonth(currentDate.getMonth() + 1)
            ),
        });
    };

    removeMonth = () => {
        const currentDate = this.state.navigationDate;
        this.setState({
            navigationDate: new Date(
                currentDate.setMonth(currentDate.getMonth() - 1)
            ),
        });
    };

    setDialogDate = (date) => {
        const { dialogFirstDate, dialogSecondDate } = this.state;
        if (dialogFirstDate && !dialogSecondDate) {
            if (date < dialogFirstDate) {
                this.setState({
                    dialogFirstDate: date,
                });
            } else {
                this.setState({
                    dialogSecondDate: date,
                });
            }
        } else if (dialogFirstDate && dialogSecondDate) {
            this.setState({
                dialogFirstDate: date,
                dialogSecondDate: null,
            });
        }
        // this.setState({
        //     dialogFirstDate: date,
        // });
    };

    handleDialogAccept = () => {
        this.props.setSelectedFirstDate(this.state.dialogFirstDate);
        this.props.setSelectedSecondDate(this.state.dialogSecondDate);
        this.handleClickOutside();
    };

    setLastHovered = (date) => {
        this.setState({
            lastHovered: date,
        });
    };

    handleClickOutside = () => this.props.handleDialogClose();

    render() {
        const {
            dialogFirstDate,
            dialogSecondDate,
            navigationDate,
            lastHovered,
        } = this.state;

        return (
            <div className="date-picker">
                <DatePickerHeader
                    dateFirst={dialogFirstDate}
                    dateSecond={dialogSecondDate}
                />
                <DatePickerContent>
                    <DatePickerNavigation
                        date={navigationDate}
                        addMonth={this.addMonth}
                        removeMonth={this.removeMonth}
                    />
                    <DatePickerDays
                        days={["Ndz", "Pon", "Wt", "Śr", "Czw", "Pt", "Sob"]}
                    />
                    <DatePickerCalendar
                        selectedFirstDate={dialogFirstDate}
                        selectedSecondDate={dialogSecondDate}
                        navigationDate={navigationDate}
                        setDate={this.setDialogDate}
                        lastHovered={lastHovered}
                        setLastHovered={this.setLastHovered}
                    />
                    <DatePickerMenu
                        disabled={
                            dialogFirstDate === null ||
                            dialogSecondDate === null
                        }
                        handleAccept={this.handleDialogAccept}
                        handleReject={this.handleClickOutside}
                    />
                </DatePickerContent>
            </div>
        );
    }
}

DatePicker.propTypes = {
    selectedFirstDate: PropTypes.instanceOf(Date),
    setSelectedFirstDate: PropTypes.func,
    selectedSecondDate: PropTypes.instanceOf(Date),
    setSelectedSecondDate: PropTypes.func,
    handleDialogClose: PropTypes.func,
};

export { DatePicker };

export default onClickOutside(DatePicker);
