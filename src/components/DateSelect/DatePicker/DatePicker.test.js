import React from "react";
import { DatePicker } from "./DatePicker";

import { mount, shallow, render } from "enzyme";

test("renders without crashing", () => {
    const setSelectedFirstDate = jest.fn();
    const setSelectedSecondDate = jest.fn();
    const handleDialogClose = jest.fn();
    shallow(
        <DatePicker
            selectedFirstDate={null}
            setSelectedFirstDate={setSelectedFirstDate}
            selectedSecondDate={null}
            setSelectedSecondDate={setSelectedSecondDate}
            handleDialogClose={handleDialogClose}
        />
    );
});

test("check state", () => {
    const selectedFirstDate = new Date("1990-11-11");
    const setSelectedFirstDate = jest.fn();
    const selectedSecondDate = new Date("1990-11-12");
    const setSelectedSecondDate = jest.fn();
    const handleDialogClose = jest.fn();
    const datePicker = shallow(
        <DatePicker
            selectedFirstDate={selectedFirstDate}
            setSelectedFirstDate={setSelectedFirstDate}
            selectedSecondDate={selectedSecondDate}
            setSelectedSecondDate={setSelectedSecondDate}
            handleDialogClose={handleDialogClose}
        />
    );
    expect(datePicker.instance().state.dialogFirstDate).toEqual(
        selectedFirstDate
    );
    expect(datePicker.instance().state.dialogSecondDate).toEqual(
        selectedSecondDate
    );
    expect(datePicker.instance().state.navigationDate).toEqual(
        selectedFirstDate
    );
    expect(datePicker.instance().state.lastHovered).toBeNull();
});

test("test navigate", () => {
    const selectedFirstDate = new Date("1990-11-11");
    const setSelectedFirstDate = jest.fn();
    const selectedSecondDate = new Date("1990-11-21");
    const setSelectedSecondDate = jest.fn();
    const handleDialogClose = jest.fn();
    const datePicker = shallow(
        <DatePicker
            selectedFirstDate={selectedFirstDate}
            setSelectedFirstDate={setSelectedFirstDate}
            selectedSecondDate={selectedSecondDate}
            setSelectedSecondDate={setSelectedSecondDate}
            handleDialogClose={handleDialogClose}
        />
    );
    datePicker.instance().addMonth();
    expect(datePicker.instance().state.navigationDate.getMonth()).toBe(
        new Date("1990-12-11").getMonth()
    );
    datePicker.instance().removeMonth();
    expect(datePicker.instance().state.navigationDate.getMonth()).toBe(
        new Date("1990-11-11").getMonth()
    );
});

test("test set dialog date", () => {
    const selectedFirstDate = new Date("1990-11-11");
    const setSelectedFirstDate = jest.fn();
    const selectedSecondDate = new Date("1990-11-21");
    const setSelectedSecondDate = jest.fn();
    const handleDialogClose = jest.fn();
    const datePicker = shallow(
        <DatePicker
            selectedFirstDate={selectedFirstDate}
            setSelectedFirstDate={setSelectedFirstDate}
            selectedSecondDate={selectedSecondDate}
            setSelectedSecondDate={setSelectedSecondDate}
            handleDialogClose={handleDialogClose}
        />
    );
    datePicker.setProps({
        selectedFirstDate: new Date("1990-01-02"),
        selectedSecondDate: null,
    });
    datePicker.instance().setDialogDate(new Date("1990-01-01"));
    expect(datePicker.instance().state.dialogFirstDate).toEqual(
        new Date("1990-01-01")
    );
    datePicker.instance().setDialogDate(new Date("1990-01-03"));
    expect(datePicker.instance().state.dialogFirstDate).toEqual(
        new Date("1990-01-01")
    );
    expect(datePicker.instance().state.dialogSecondDate).toEqual(
        new Date("1990-01-03")
    );
    datePicker.setProps({
        selectedFirstDate: new Date("1990-01-01"),
        selectedSecondDate: new Date("199-01-02"),
    });
    datePicker.instance().setDialogDate(new Date("1990-01-03"));
    expect(datePicker.instance().state.dialogFirstDate).toEqual(
        new Date("1990-01-03")
    );
});

test("test dialog accept", () => {
    const testState = {
        selectedFirstDate: new Date("1990-11-11"),
        selectedSecondDate: new Date("1990-11-21"),
    };
    const setSelectedFirstDate = (date) => (testState.selectedFirstDate = date);
    const setSelectedSecondDate = (date) =>
        (testState.selectedSecondDate = date);
    const handleDialogClose = jest.fn();
    const datePicker = mount(
        <DatePicker
            selectedFirstDate={testState.selectedFirstDate}
            setSelectedFirstDate={setSelectedFirstDate}
            selectedSecondDate={testState.selectedSecondDate}
            setSelectedSecondDate={setSelectedSecondDate}
            handleDialogClose={handleDialogClose}
        />
    );
    datePicker.instance().setState({
        dialogFirstDate: new Date("1990-01-01"),
        dialogSecondDate: new Date("1990-01-02"),
    });
    datePicker.find(".date-picker-menu").childAt(1).simulate("click");
    expect(testState.selectedFirstDate).toEqual(new Date("1990-01-01"));
    expect(testState.selectedSecondDate).toEqual(new Date("1990-01-02"));
});

test("test dialog accept", () => {
    const testState = {
        selectedFirstDate: new Date("1990-11-11"),
        selectedSecondDate: new Date("1990-11-21"),
    };
    const setSelectedFirstDate = (date) => (testState.selectedFirstDate = date);
    const setSelectedSecondDate = (date) =>
        (testState.selectedSecondDate = date);
    const handleDialogClose = jest.fn();
    const datePicker = mount(
        <DatePicker
            selectedFirstDate={testState.selectedFirstDate}
            setSelectedFirstDate={setSelectedFirstDate}
            selectedSecondDate={testState.selectedSecondDate}
            setSelectedSecondDate={setSelectedSecondDate}
            handleDialogClose={handleDialogClose}
        />
    );
    datePicker.instance().setState({
        dialogFirstDate: new Date("1990-01-01"),
        dialogSecondDate: new Date("1990-01-02"),
    });
    datePicker.find(".date-picker-menu").childAt(0).simulate("click");
    expect(testState.selectedFirstDate).toEqual(new Date("1990-11-11"));
    expect(testState.selectedSecondDate).toEqual(new Date("1990-11-21"));
});
