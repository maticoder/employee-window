import React from "react";
import ListItem, { ListItemInput, ListItemCheckbox } from "./ListItem";

import { mount, shallow } from "enzyme";

test("renders without crashing", () => {
    const handleChange = jest.fn();
    const listItem = mount(
        <ListItem>
            <ListItemInput
                value="value"
                handleChange={handleChange}
                placeholder="Witaj"
            />
        </ListItem>
    );
});

test("list item with all prop has got all class", () => {
    const handleChange = jest.fn();
    const listItem = mount(
        <ListItem all>
            <ListItemInput
                value="value"
                handleChange={handleChange}
                placeholder="Witaj"
            />
        </ListItem>
    );
    expect(listItem.children().hasClass("all")).toBeTruthy();
    listItem.setProps({
        all: false,
    });
    expect(listItem.children().hasClass("all")).toBeFalsy();
});

test("list item with first prop has got first class", () => {
    const handleChange = jest.fn();
    const listItem = mount(
        <ListItem first>
            <ListItemInput
                value="value"
                handleChange={handleChange}
                placeholder="Witaj"
            />
        </ListItem>
    );
    expect(listItem.children().hasClass("first")).toBeTruthy();
    listItem.setProps({
        first: false,
    });
    expect(listItem.children().hasClass("first")).toBeFalsy();
});

test("list item input has got correct value and placeholder", () => {
    const handleChange = jest.fn();
    const listItem = mount(
        <ListItem>
            <ListItemInput
                value="Tekst"
                handleChange={handleChange}
                placeholder="Wpisz"
            />
        </ListItem>
    );
    expect(listItem.find("input").props().value).toBe("Tekst");
    expect(listItem.find("input").props().placeholder).toBe("Wpisz");
});

test("list item input changes properly", () => {
    const testState = { value: "Tekst" };
    const listItem = mount(
        <ListItem>
            <ListItemInput
                value={testState.value}
                handleChange={(e) => (testState.value = e.target.value)}
                placeholder="Wpisz"
            />
        </ListItem>
    );
    listItem.find("input").simulate("change", { target: { value: "Cos" } });
    expect(testState.value).toEqual("Cos");
});

test("list item checkbox changes properly", () => {
    const testState = { checked: false };
    const listItem = mount(
        <ListItem>
            <ListItemCheckbox
                label="Zaznacz"
                checked={testState.checked}
                onChange={(e) => (testState.checked = e.target.value)}
            />
        </ListItem>
    );
    expect(listItem.find("input").props().checked).toBeFalsy();
    listItem.find("input").simulate("change", { target: { value: true } });
    expect(testState.checked).toBeTruthy();
});

test("check list item checkbox label", () => {
    const handleChange = jest.fn();
    const listItem = mount(
        <ListItem>
            <ListItemCheckbox
                label="Zaznacz"
                checked={true}
                onChange={handleChange}
            />
        </ListItem>
    );
    expect(listItem.find("span.list-item-label").text()).toBe("Zaznacz");
});
