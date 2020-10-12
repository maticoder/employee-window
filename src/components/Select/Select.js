import React, { Component } from "react";
import PropTypes from "prop-types";
import ListItem, { ListItemInput, ListItemCheckbox } from "./ListItem/ListItem";

import SelectInput from "./SelectInput/SelectInput";
import SelectDropdown from "./SelecDropdown/SelectDropdown";

// scrollbar
import "overlayscrollbars/css/OverlayScrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import onClickOutside from "react-onclickoutside";

import "./Select.css";

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            filter: "",
        };
    }

    handleClickOutside = () => this.setState({ open: false, filter: "" });

    handleFilterChange = (e) => {
        this.setState({
            filter: e.target.value,
        });
    };

    filteredOptions = () => {
        return this.props.options.filter((option) =>
            option.toLowerCase().includes(this.state.filter.toLowerCase())
        );
    };

    toggle = () =>
        this.setState({
            open: !this.state.open,
        });

    handleElementChange = (element) => {
        if (this.props.selected.includes(element)) {
            this.props.setSelected(
                this.props.selected.filter((el) => el !== element)
            );
        } else {
            this.props.setSelected((selected) => [...selected, element]);
        }
    };

    handleAllElementChange = (elements) => {
        const filtered = this.filteredOptions();
        if (
            filtered.every((element) => this.props.selected.includes(element))
        ) {
            this.props.setSelected(
                this.props.selected.filter((el) => !filtered.includes(el))
            );
        } else {
            const newArray = elements.filter(
                (element) => !this.props.selected.includes(element)
            );
            this.props.setSelected((selected) => [...selected, ...newArray]);
        }
    };

    render() {
        const {
            label,
            allLabel,
            inputLabel,
            searchLabel,
            // options,
            selected,
            // setSelected,
            maxInputElements,
        } = this.props;

        const { open, filter } = this.state;

        return (
            <div className="select">
                <SelectInput
                    active={open}
                    onClick={this.toggle}
                    label={label}
                    selected={selected}
                    inputLabel={inputLabel}
                    maxInputElements={maxInputElements}
                />
                {open && (
                    <SelectDropdown>
                        <ListItem first>
                            <ListItemInput
                                value={filter}
                                handleChange={this.handleFilterChange}
                                placeholder={searchLabel}
                            />
                        </ListItem>
                        <ListItem all>
                            <ListItemCheckbox
                                label={allLabel}
                                checked={
                                    // selected.length ===
                                    //     this.filteredOptions().length &&
                                    this.filteredOptions().every((element) =>
                                        selected.includes(element)
                                    )
                                    // compareSortedArrays(
                                    //     selected,
                                    //     this.filteredOptions()
                                    // )
                                }
                                onChange={() =>
                                    this.handleAllElementChange(
                                        this.filteredOptions()
                                    )
                                }
                            />
                        </ListItem>
                        <OverlayScrollbarsComponent
                            className="overlay-scrollbar"
                            style={{ width: "100%", maxHeight: 230 }}
                        >
                            {this.filteredOptions().map((option) => (
                                <ListItem key={option}>
                                    <ListItemCheckbox
                                        label={option}
                                        checked={selected.includes(option)}
                                        onChange={() =>
                                            this.handleElementChange(option)
                                        }
                                    />
                                </ListItem>
                            ))}
                        </OverlayScrollbarsComponent>
                    </SelectDropdown>
                )}
            </div>
        );
    }
}

Select.propTypes = {
    label: PropTypes.string,
    allLabel: PropTypes.string,
    inputLabel: PropTypes.string,
    searchLabel: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    selected: PropTypes.arrayOf(PropTypes.string),
    setSelected: PropTypes.func,
    maxInputElements: PropTypes.number,
};

export default onClickOutside(Select);
