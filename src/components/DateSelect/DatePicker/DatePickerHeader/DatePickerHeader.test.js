import React from "react";
import DatePickerHeader from "./DatePickerHeader";

import { mount, shallow, render } from "enzyme";

test("renders without crashing", () => {
    shallow(<DatePickerHeader dateFirst={null} dateSecond={null} />);
});

test("renders dates properly", () => {
    const dateFirst = new Date("1990-11-11");
    const dateSecond = new Date("1991-11-11");
    const datePickerHeader = shallow(
        <DatePickerHeader dateFirst={null} dateSecond={null} />
    );
    expect(datePickerHeader.find(".date")).toHaveLength(0);
    datePickerHeader.setProps({
        dateFirst: dateFirst,
        dateSecond: null,
    });
    expect(datePickerHeader.find(".date")).toHaveLength(1);
    expect(datePickerHeader.find(".date").find(".year").text()).toBe("1990");
    expect(datePickerHeader.find(".date").find(".month-day").text()).toBe(
        "Nov 11"
    );
    datePickerHeader.setProps({
        dateFirst: null,
        dateSecond: dateSecond,
    });
    expect(datePickerHeader.find(".date")).toHaveLength(1);
    expect(datePickerHeader.find(".date").find(".year").text()).toBe("1991");
    expect(datePickerHeader.find(".date").find(".month-day").text()).toBe(
        "11 Nov"
    );
    datePickerHeader.setProps({
        dateFirst: dateFirst,
        dateSecond: dateSecond,
    });
    expect(datePickerHeader.find(".date")).toHaveLength(2);
    expect(datePickerHeader.find(".date").at(0).find(".year").text()).toBe(
        "1990"
    );
    expect(datePickerHeader.find(".date").at(1).find(".year").text()).toBe(
        "1991"
    );
    expect(datePickerHeader.find(".date").at(0).find(".month-day").text()).toBe(
        "Nov 11"
    );
    expect(datePickerHeader.find(".date").at(1).find(".month-day").text()).toBe(
        "11 Nov"
    );
});
