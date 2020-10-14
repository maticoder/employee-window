import React from "react";
import SelectInput from "./SelectInput";

import { mount, shallow, render } from "enzyme";

test("renders without crashing", () => {
    const handleClick = jest.fn();
    render(
        <SelectInput
            active={true}
            inputLabel="Label"
            onClick={handleClick}
            label="Label"
            selected={[]}
            maxInputElements={0}
        />
    );
});

test("check props", () => {
    const handleClick = jest.fn();
    const selectInput = mount(
        <SelectInput
            active={true}
            inputLabel="Input Label"
            onClick={handleClick}
            label="Label"
            selected={[]}
            maxInputElements={0}
        />
    );
    expect(selectInput.children().props().className).toBe(
        "select-input active"
    );
    selectInput.setProps({
        active: false,
    });
    expect(selectInput.children().props().className.trim()).toBe(
        "select-input"
    );
    expect(selectInput.find("p").text()).toBe("Input Label");
    expect(selectInput.find(".select-input-label").text()).toBe("Label");
});

test("check click", () => {
    const testState = { data: 1 };
    const selectInput = mount(
        <SelectInput
            active={true}
            inputLabel="Input Label"
            onClick={() => (testState.data = 2)}
            label="Label"
            selected={[]}
            maxInputElements={0}
        />
    );
    expect(testState.data).toBe(1);
    selectInput.simulate("click");
    expect(testState.data).toBe(2);
});

test("check selected label", () => {
    const selected = ["one", "two", "three"];
    const handleClick = jest.fn();
    const selectInput = mount(
        <SelectInput
            active={true}
            inputLabel="Input Label"
            onClick={handleClick}
            label="Label"
            selected={selected}
            maxInputElements={1}
        />
    );
    expect(selectInput.find("p").text()).toBe("one +2");
});

test("check max input elements", () => {
    const selected = ["one", "two", "three"];
    const handleClick = jest.fn();
    const selectInput = mount(
        <SelectInput
            active={true}
            inputLabel="Input Label"
            onClick={handleClick}
            label="Label"
            selected={selected}
            maxInputElements={1}
        />
    );
    expect(selectInput.find("p").text()).toBe("one +2");
    selectInput.setProps({
        maxInputElements: 2,
    });
    expect(selectInput.find("p").text()).toBe("one, two +1");
    selectInput.setProps({
        maxInputElements: 3,
    });
    expect(selectInput.find("p").text()).toBe("one, two, three");
});
