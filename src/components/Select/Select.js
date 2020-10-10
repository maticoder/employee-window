import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ListItem, {
    ListItemInput,
    ListItemCheckbox,
} from "../ListItem/ListItem";

import SelectInput from "../SelectInput/SelectInput";
import SelectDropdown from "../SelecDropdown/SelectDropdown";

// scrollbar
import "overlayscrollbars/css/OverlayScrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import onClickOutside from "react-onclickoutside";

import "./Select.css";

function Select({
    label,
    allLabel,
    inputLabel,
    searchLabel,
    options,
    selected,
    handleElementChange,
}) {
    const [open, setOpen] = useState(false);
    const [filter, setFilter] = useState("");

    Select.handleClickOutside = () => setOpen(false);

    useEffect(() => {
        if (!open) {
            setFilter("");
        }
    }, [open]);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const filterOptions = () => {
        return options.filter((option) =>
            option.toLowerCase().includes(filter.toLowerCase())
        );
    };

    const toggle = () => setOpen(!open);

    return (
        <div className="select">
            <SelectInput
                active={open}
                onClick={toggle}
                label={label}
                selected={selected}
                inputLabel={inputLabel}
            />
            {open && (
                <SelectDropdown>
                    <ListItem first>
                        <ListItemInput
                            value={filter}
                            handleChange={handleFilterChange}
                            placeholder={searchLabel}
                        />
                    </ListItem>
                    <ListItem all>
                        <ListItemCheckbox label={allLabel} />
                    </ListItem>
                    <OverlayScrollbarsComponent
                        className="overlay-scrollbar"
                        style={{ width: "100%", maxHeight: 230 }}
                    >
                        {filterOptions().map((option) => (
                            <ListItem key={option}>
                                <ListItemCheckbox
                                    label={option}
                                    checked={selected.includes(option)}
                                    onChange={() => handleElementChange(option)}
                                />
                            </ListItem>
                        ))}
                    </OverlayScrollbarsComponent>
                </SelectDropdown>
            )}
        </div>
    );
}

const clickOutsideConfig = {
    handleClickOutside: () => Select.handleClickOutside,
};

Select.propTypes = {
    label: PropTypes.string,
    allLabel: PropTypes.string,
    inputLabel: PropTypes.string,
    searchLabel: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    selected: PropTypes.arrayOf(PropTypes.string),
    handleElementChange: PropTypes.func,
};

export default onClickOutside(Select, clickOutsideConfig);
