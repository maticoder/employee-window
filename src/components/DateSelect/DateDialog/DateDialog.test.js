import React from "react";
import DateDialog from "./DateDialog";

import { mount, shallow, render } from "enzyme";

test("renders without crashing", () => {
    shallow(<DateDialog open={true} />);
});

test("hide and show children", () => {
    const dateDialog = mount(
        <DateDialog open={false}>
            <p>Text</p>
        </DateDialog>
    );
    expect(dateDialog.props().open).toBeFalsy();
    expect(dateDialog.children()).toHaveLength(0);
    dateDialog.setProps({
        open: true,
    });
    expect(dateDialog.props().open).toBeTruthy();
    expect(dateDialog.children()).toHaveLength(1);
    expect(dateDialog.children().text()).toBe("Text");
});
