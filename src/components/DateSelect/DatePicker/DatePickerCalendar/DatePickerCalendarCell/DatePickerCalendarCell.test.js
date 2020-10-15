import React from "react";
import DatePickerCalendarCell from "./DatePickerCalendarCell";

import { mount, shallow, render } from "enzyme";

test("renders without crashing", () => {
    const handleClick = jest.fn();
    const handleOnMouseOver = jest.fn();
    shallow(
        <DatePickerCalendarCell
            date={new Date()}
            active={true}
            highlight={true}
            onClick={handleClick}
            onMouseOver={handleOnMouseOver}
        />
    );
});

test("date is displayed properly", () => {
    const date = new Date("1990-11-11");
    const handleClick = jest.fn();
    const handleOnMouseOver = jest.fn();
    const datePickerCalendarCell = shallow(
        <DatePickerCalendarCell
            date={null}
            active={true}
            highlight={true}
            onClick={handleClick}
            onMouseOver={handleOnMouseOver}
        />
    );
    expect(datePickerCalendarCell.find("span").text()).toBe("");
    datePickerCalendarCell.setProps({
        date,
    });
    expect(datePickerCalendarCell.find("span").text()).toBe("11");
});

test("class names are displayed properly", () => {
    const handleClick = jest.fn();
    const handleOnMouseOver = jest.fn();
    const datePickerCalendarCell = shallow(
        <DatePickerCalendarCell
            date={null}
            active={false}
            highlight={false}
            onClick={handleClick}
            onMouseOver={handleOnMouseOver}
        />
    );
    expect(datePickerCalendarCell.props().className.trim()).toBe("cell");
    datePickerCalendarCell.setProps({
        date: new Date(),
    });
    expect(datePickerCalendarCell.props().className.trim()).toBe(
        "cell non-empty-cell"
    );
    datePickerCalendarCell.setProps({
        active: true,
    });
    expect(datePickerCalendarCell.props().className.trim()).toBe(
        "cell non-empty-cell active"
    );
    datePickerCalendarCell.setProps({
        highlight: true,
    });
    expect(datePickerCalendarCell.props().className.trim()).toBe(
        "cell non-empty-cell active highlight"
    );
});
