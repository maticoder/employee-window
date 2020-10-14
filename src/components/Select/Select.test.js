import React from "react";
import { Select } from "./Select";

import { mount, shallow, render } from "enzyme";

test("renders without crashing", () => {
    const setSelected = jest.fn();
    shallow(
        <Select
            label="Stanowiska"
            allLabel="Wszystkie"
            inputLabel="Wybierz..."
            searchLabel="Szukaj..."
            options={[]}
            selected={[]}
            setSelected={setSelected}
            maxInputElements={1}
        />
    );
});

test("check state", () => {
    const setSelected = jest.fn();
    const select = shallow(
        <Select
            label="Stanowiska"
            allLabel="Wszystkie"
            inputLabel="Wybierz..."
            searchLabel="Szukaj..."
            options={[]}
            selected={[]}
            setSelected={setSelected}
            maxInputElements={2}
        />
    );
    select.setState({
        open: false,
        filter: "",
    });
    expect(select.instance().state.open).toBeFalsy();
    expect(select.instance().state.filter).toBe("");
    expect(select.children().length).toBe(1);
    select.instance().toggle();
    expect(select.instance().state.open).toBeTruthy();
    expect(select.children().length).toBe(2);
});

test("test the add element method", () => {
    const options = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let selectedElements = [];
    const setSelected = (s) => {
        selectedElements = s(selectedElements);
    };
    const select = shallow(
        <Select
            label="Stanowiska"
            allLabel="Wszystkie"
            inputLabel="Wybierz..."
            searchLabel="Szukaj..."
            options={options}
            selected={selectedElements}
            setSelected={setSelected}
            maxInputElements={2}
        />
    );
    select.instance().handleElementChange("2");
    expect([...selectedElements]).toEqual(["2"]);
});

test("test the remove element method", () => {
    const options = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let selectedElements = ["2"];
    const setSelected = (s) => {
        selectedElements = s(selectedElements);
    };
    const select = shallow(
        <Select
            label="Stanowiska"
            allLabel="Wszystkie"
            inputLabel="Wybierz..."
            searchLabel="Szukaj..."
            options={options}
            selected={selectedElements}
            setSelected={setSelected}
            maxInputElements={2}
        />
    );
    select.instance().handleElementChange("2");
    expect([...selectedElements]).toEqual([]);
});

test("test the add elements method", () => {
    const options = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let selectedElements = [];
    const setSelected = (s) => {
        selectedElements = s(selectedElements);
    };
    const select = shallow(
        <Select
            label="Stanowiska"
            allLabel="Wszystkie"
            inputLabel="Wybierz..."
            searchLabel="Szukaj..."
            options={options}
            selected={selectedElements}
            setSelected={setSelected}
            maxInputElements={2}
        />
    );
    select.instance().handleAllElementChange(["0", "1", "2"]);
    expect([...selectedElements]).toEqual(["0", "1", "2"]);
});

test("test the remove elements method", () => {
    const options = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let selectedElements = ["0", "1", "2"];
    const setSelected = (s) => {
        selectedElements = s(selectedElements);
    };
    const select = shallow(
        <Select
            label="Stanowiska"
            allLabel="Wszystkie"
            inputLabel="Wybierz..."
            searchLabel="Szukaj..."
            options={options}
            selected={selectedElements}
            setSelected={setSelected}
            maxInputElements={2}
        />
    );
    select.instance().handleAllElementChange(["2"]);
    expect([...selectedElements]).toEqual(["0", "1"]);
});
