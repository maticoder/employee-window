import React from "react";
import DatePickerContent from "./DatePickerContent";

import { mount, shallow, render } from "enzyme";

test("renders without crashing", () => {
    shallow(
        <DatePickerContent>
            <p>Text</p>
        </DatePickerContent>
    );
});

test("renders children properly", () => {
    const nums = ["one", "two", "three"];
    const datePickerContent = shallow(
        <DatePickerContent>
            {nums.map((num) => (
                <p key={num}>{num}</p>
            ))}
        </DatePickerContent>
    );
    expect(datePickerContent.children().length).toBe(nums.length);
    expect(datePickerContent.childAt(0).text()).toBe("one");
    expect(datePickerContent.childAt(1).text()).toBe("two");
    expect(datePickerContent.childAt(2).text()).toBe("three");
});
