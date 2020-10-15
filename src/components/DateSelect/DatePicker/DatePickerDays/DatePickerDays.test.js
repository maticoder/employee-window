import React from "react";
import DatePickerDays from "./DatePickerDays";

import { mount, shallow, render } from "enzyme";

test("renders without crashing", () => {
    const days = ["Ndz", "Pon", "Wt", "Śr", "Czw", "Pt", "Sob"];
    shallow(<DatePickerDays days={days} />);
});

test("renders days properly", () => {
    const days = ["Ndz", "Pon", "Wt", "Śr", "Czw", "Pt", "Sob"];
    const datePickerDays = shallow(<DatePickerDays days={days} />);
    expect(datePickerDays.children().length).toBe(days.length);
    datePickerDays
        .children()
        .forEach((child, index) => expect(child.text()).toBe(days[index]));
});
