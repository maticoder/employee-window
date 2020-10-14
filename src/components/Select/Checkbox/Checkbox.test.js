import React from "react";
import Checkbox from "./Checkbox";

import { mount, shallow } from "enzyme";

test("renders without crashing", () => {
    const handleChange = jest.fn();
    shallow(<Checkbox checked={true} onChange={handleChange} />);
});

test("checked property displays done icon", () => {
    const handleChange = jest.fn();
    const checkbox = shallow(
        <Checkbox checked={true} onChange={handleChange} />
    );
    expect(checkbox.find("span").text()).toBe("done");
});

test("checked property do not displays checkmark", () => {
    const handleChange = jest.fn();
    const checkbox = shallow(
        <Checkbox checked={false} onChange={handleChange} />
    );
    expect(checkbox.find("span").text()).toBe("");
});

test("checked property works properly", () => {
    let checked = true;
    const handleChange = jest.fn();
    const checkbox = shallow(
        <Checkbox checked={checked} onChange={handleChange} />
    );
    expect(checkbox.find("input").getElement().props.checked).toBeTruthy();
    checkbox.setProps({ checked: false });
    expect(checkbox.find("input").getElement().props.checked).toBeFalsy();
});
