import React from "react";
import DatePickerNavigation from "./DatePickerNavigation";

import { mount, shallow, render } from "enzyme";

test("renders without crashing", () => {
    const date = new Date();
    const addMonth = jest.fn();
    const removeMonth = jest.fn();
    shallow(
        <DatePickerNavigation
            date={date}
            addMonth={addMonth}
            removeMonth={removeMonth}
        />
    );
});

test("renders dates properly", () => {
    const date = new Date("1990-11-11");
    const addMonth = jest.fn();
    const removeMonth = jest.fn();
    const datePickerNavigation = shallow(
        <DatePickerNavigation
            date={date}
            addMonth={addMonth}
            removeMonth={removeMonth}
        />
    );
    expect(datePickerNavigation.find("span").text()).toBe("November 1990");
});

test("changes dates properly", () => {
    let date = new Date("1990-11-11");
    const add = new Date("1990-12-11");
    const remove = new Date("1990-10-11");
    const addMonth = () => (date = add);
    const removeMonth = () => (date = remove);
    const datePickerNavigation = mount(
        <DatePickerNavigation
            date={date}
            addMonth={addMonth}
            removeMonth={removeMonth}
        />
    );
    expect(datePickerNavigation.find("span").text()).toBe("November 1990");
    datePickerNavigation.find("button").at(0).simulate("click");
    expect(date.toISOString()).toBe(remove.toISOString());
    datePickerNavigation.find("button").at(1).simulate("click");
    expect(date.toISOString()).toBe(add.toISOString());
});
