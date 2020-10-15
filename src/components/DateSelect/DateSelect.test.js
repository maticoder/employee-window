import React from "react";
import DateSelect from "./DateSelect";

import { mount, shallow, render } from "enzyme";

test("renders without crashing", () => {
    const selectedFirstDate = new Date();
    const selectedSecondDate = new Date();
    const setSelectedFirstDate = jest.fn();
    const setSelectedSecondDate = jest.fn();
    shallow(
        <DateSelect
            label=""
            inputLabel=""
            selectedFirstDate={selectedFirstDate}
            setSelectedFirstDate={setSelectedFirstDate}
            selectedSecondDate={selectedSecondDate}
            setSelectedSecondDate={setSelectedSecondDate}
        />
    );
});

test("check state and toggle open", () => {
    const selectedFirstDate = new Date();
    const selectedSecondDate = new Date();
    const setSelectedFirstDate = jest.fn();
    const setSelectedSecondDate = jest.fn();
    const dateSelect = shallow(
        <DateSelect
            label=""
            inputLabel=""
            selectedFirstDate={selectedFirstDate}
            setSelectedFirstDate={setSelectedFirstDate}
            selectedSecondDate={selectedSecondDate}
            setSelectedSecondDate={setSelectedSecondDate}
        />
    );
    dateSelect.instance().handleDialogClose();
    expect(dateSelect.instance().state.open).toBeFalsy();
    dateSelect.instance().handleDialogOpen();
    expect(dateSelect.instance().state.open).toBeTruthy();
});
