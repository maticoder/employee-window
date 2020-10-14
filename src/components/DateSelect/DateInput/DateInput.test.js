import React from "react";
import DateInput from "./DateInput";

import { mount, shallow, render } from "enzyme";

test("renders without crashing", () => {
    const handleClick = jest.fn();
    shallow(
        <DateInput
            label="Label"
            inputLabel="Input Label"
            selectedFirstDate={new Date()}
            selectedSecondDate={new Date()}
            onClick={handleClick}
        />
    );
});

test("check label and input label", () => {
    const handleClick = jest.fn();
    const dateInput = shallow(
        <DateInput
            label="Label"
            inputLabel="Input Label"
            selectedFirstDate={null}
            selectedSecondDate={null}
            onClick={handleClick}
        />
    );
    expect(dateInput.find(".date-input-label").text()).toBe("Label");
    expect(dateInput.find(".date-input-date").text()).toBe("Input Label");
});

test("check dates", () => {
    const handleClick = jest.fn();
    const dateFirst = new Date("1997-11-11");
    const dateSecond = new Date("1998-11-11");
    const dateInput = shallow(
        <DateInput
            label="Label"
            inputLabel="Input Label"
            selectedFirstDate={null}
            selectedSecondDate={null}
            onClick={handleClick}
        />
    );
    expect(dateInput.find(".date-input-date").text()).toBe("Input Label");
    dateInput.setProps({
        selectedFirstDate: dateFirst,
        selectedSecondDate: null,
    });
    expect(dateInput.find(".date-input-date").text()).toBe("Input Label");
    dateInput.setProps({
        selectedFirstDate: null,
        selectedSecondDate: dateSecond,
    });
    expect(dateInput.find(".date-input-date").text()).toBe("Input Label");
    dateInput.setProps({
        selectedFirstDate: dateFirst,
        selectedSecondDate: dateSecond,
    });
    expect(dateInput.find(".date-input-date").text()).toBe(
        "11.11.97 - 11.11.98"
    );
});

test("check on click", () => {
    const testState = {
        value: 1,
    };
    const handleClick = () => testState.value++;
    const dateInput = shallow(
        <DateInput
            label="Label"
            inputLabel="Input Label"
            selectedFirstDate={null}
            selectedSecondDate={null}
            onClick={handleClick}
        />
    );
    dateInput.simulate("click");
    expect(testState.value).toBe(2);
});
