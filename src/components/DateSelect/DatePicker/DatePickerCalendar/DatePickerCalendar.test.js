import React from "react";
import DatePickerCalendar from "./DatePickerCalendar";

import { getCalendar, compareDate } from "../../../../util/date";

import { mount, shallow, render } from "enzyme";

test("renders without crashing", () => {
    const setDate = jest.fn();
    const setLastHovered = jest.fn();
    shallow(
        <DatePickerCalendar
            selectedFirstDate={null}
            selectedSecondDate={null}
            navigationDate={new Date()}
            setDate={setDate}
            lastHovered={new Date()}
            setLastHovered={setLastHovered}
        />
    );
});

test("test get calendar", () => {
    const date = new Date("2014-08-18");
    const calendar = getCalendar(date);
    const result = [
        null,
        null,
        null,
        null,
        null,
        new Date("2014-08-01"),
        new Date("2014-08-02"),
        new Date("2014-08-03"),
        new Date("2014-08-04"),
        new Date("2014-08-05"),
        new Date("2014-08-06"),
        new Date("2014-08-07"),
        new Date("2014-08-08"),
        new Date("2014-08-09"),
        new Date("2014-08-10"),
        new Date("2014-08-11"),
        new Date("2014-08-12"),
        new Date("2014-08-13"),
        new Date("2014-08-14"),
        new Date("2014-08-15"),
        new Date("2014-08-16"),
        new Date("2014-08-17"),
        new Date("2014-08-18"),
        new Date("2014-08-19"),
        new Date("2014-08-20"),
        new Date("2014-08-21"),
        new Date("2014-08-22"),
        new Date("2014-08-23"),
        new Date("2014-08-24"),
        new Date("2014-08-25"),
        new Date("2014-08-26"),
        new Date("2014-08-27"),
        new Date("2014-08-28"),
        new Date("2014-08-29"),
        new Date("2014-08-30"),
        new Date("2014-08-31"),
        null,
        null,
        null,
        null,
        null,
        null,
    ];
    calendar.forEach((date, index) =>
        date
            ? expect(date.getFullYear()).toBe(result[index].getFullYear())
            : expect(date).toBe(result[index])
    );
    calendar.forEach((date, index) =>
        date
            ? expect(date.getMonth()).toBe(result[index].getMonth())
            : expect(date).toBe(result[index])
    );
    calendar.forEach((date, index) =>
        date
            ? expect(date.getDate()).toBe(result[index].getDate())
            : expect(date).toBe(result[index])
    );
});

test("test compare date", () => {
    const date = new Date("1990-11-10");
    let firstDate = new Date("1991-11-10");
    let secondDate = new Date("1992-11-10");
    expect(compareDate(date, firstDate, secondDate)).toBeFalsy();
    firstDate = new Date("1990-11-10");
    secondDate = new Date("1992-11-10");
    expect(compareDate(date, firstDate, secondDate)).toBeTruthy();
    firstDate = new Date("1991-11-10");
    secondDate = new Date("1990-11-10");
    expect(compareDate(date, firstDate, secondDate)).toBeTruthy();
    firstDate = new Date("1990-11-10");
    secondDate = new Date("1990-11-10");
    expect(compareDate(date, firstDate, secondDate)).toBeTruthy();
});

test("dates are rendered properly", () => {
    const firstDate = new Date("1991-11-11");
    const secondDate = new Date("1991-11-21");
    const navigationDate = new Date("1990-11-11");
    const setDate = jest.fn();
    const lastHovered = new Date();
    const setLastHovered = jest.fn();
    const datePickerCalendar = shallow(
        <DatePickerCalendar
            selectedFirstDate={firstDate}
            selectedSecondDate={secondDate}
            navigationDate={navigationDate}
            setDate={setDate}
            lastHovered={lastHovered}
            setLastHovered={setLastHovered}
        />
    );
    expect(datePickerCalendar.children().at(0).dive().text()).toBe("");
    expect(datePickerCalendar.children().at(10).dive().text()).toBe("7");
    expect(
        datePickerCalendar.children().at(10).dive().props().className.trim()
    ).toBe("cell non-empty-cell");
    datePickerCalendar.setProps({
        navigationDate: new Date("1991-11-01"),
    });
    expect(datePickerCalendar.children().at(0).dive().text()).toBe("");
    expect(datePickerCalendar.children().at(10).dive().text()).toBe("6");
    expect(datePickerCalendar.children().at(25).dive().text()).toBe("21");
    expect(datePickerCalendar.children().at(14).props().active).toBeFalsy();
    expect(datePickerCalendar.children().at(15).props().active).toBeTruthy();
    expect(datePickerCalendar.children().at(25).props().active).toBeTruthy();
    expect(datePickerCalendar.children().at(14).props().highlight).toBeFalsy();
    expect(datePickerCalendar.children().at(16).props().highlight).toBeTruthy();
    datePickerCalendar.setProps({
        selectedSecondDate: null,
        lastHovered: new Date("1991-11-21"),
    });
    expect(datePickerCalendar.children().at(15).props().active).toBeTruthy();
    expect(datePickerCalendar.children().at(25).props().active).toBeFalsy();
    expect(datePickerCalendar.children().at(24).props().highlight).toBeTruthy();
    expect(datePickerCalendar.children().at(25).props().highlight).toBeFalsy();
});
