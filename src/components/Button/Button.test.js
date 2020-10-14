import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

import { shallow } from "enzyme";

test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button text="Hello" />, div);
});

test("renders button correctly", () => {
    const component = shallow(<Button text="Click me" />);
    expect(component.text()).toBe("Click me");
    expect(component.hasClass("window-button")).toBeTruthy();
});

test("fires the on click function", () => {
    const handleClick = jest.fn();
    const button = shallow(<Button text="Klik" onClick={handleClick} />);
    button.find("button").simulate("click");
    expect(handleClick).toHaveBeenCalled();
    expect(handleClick).toHaveBeenCalledTimes(1);
});
