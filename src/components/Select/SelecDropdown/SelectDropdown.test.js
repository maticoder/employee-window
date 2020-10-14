import React from "react";
import SelectDropdown from "./SelectDropdown";

import { mount, shallow } from "enzyme";

test("check class name", () => {
    const selectDropdown = shallow(
        <SelectDropdown>
            <p>Text</p>
        </SelectDropdown>
    );
    expect(selectDropdown.props().className).toBe("select-dropdown");
});

test("check children", () => {
    const items = [1, 2, 3];
    const selectDropdown = shallow(
        <SelectDropdown>
            {items.map((item) => (
                <p key={item}>{item}</p>
            ))}
        </SelectDropdown>
    );
    expect(selectDropdown.children()).toHaveLength(items.length);
});
