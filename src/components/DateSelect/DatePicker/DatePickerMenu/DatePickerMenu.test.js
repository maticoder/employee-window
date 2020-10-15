import React from "react";
import DatePickerMenu from "./DatePickerMenu";

import { mount, shallow, render } from "enzyme";

test("renders without crashing", () => {
    const handleAccept = jest.fn();
    const handleReject = jest.fn();
    shallow(
        <DatePickerMenu
            disabled={false}
            handleAccept={handleAccept}
            handleReject={handleReject}
        />
    );
});

test("check if button is active or disabled", () => {
    const handleAccept = jest.fn();
    const handleReject = jest.fn();
    const datePickerMenu = shallow(
        <DatePickerMenu
            disabled={false}
            handleAccept={handleAccept}
            handleReject={handleReject}
        />
    );
    expect(datePickerMenu.find("button").at(1).props().disabled).toBeFalsy();
    datePickerMenu.setProps({
        disabled: true,
    });
    expect(datePickerMenu.find("button").at(1).props().disabled).toBeTruthy();
});
