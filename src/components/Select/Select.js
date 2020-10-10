import React, { useState } from "react";
import PropTypes from "prop-types";
import ListItem, {
    ListItemInput,
    ListItemCheckbox,
} from "../ListItem/ListItem";

import SelectInput from "../SelectInput/SelectInput";

import "./Select.css";

function Select({ label, options, selected, handleElementChange }) {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(!open);

    return (
        <div className="select">
            <SelectInput
                active={open}
                onClick={toggle}
                label={label}
                selected={selected}
            />
            {open && (
                <div className="select-dropdown">
                    <ListItem first>
                        <ListItemInput placeholder="Szukaj..." />
                    </ListItem>
                    <ListItem all>
                        <ListItemCheckbox label="Wszystkie" />
                    </ListItem>
                    <div className="scroll-area">
                        {options.map((option) => (
                            <ListItem key={option}>
                                <ListItemCheckbox
                                    label={option}
                                    checked={selected.includes(option)}
                                    onChange={() => handleElementChange(option)}
                                />
                            </ListItem>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

Select.propTypes = {
    label: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    selected: PropTypes.arrayOf(PropTypes.string),
    handleElementChange: PropTypes.func,
};

export default Select;
