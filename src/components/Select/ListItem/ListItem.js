import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Checkbox from "../Checkbox/Checkbox";

import "./ListItem.css";

export function ListItemInput({ value, handleChange, placeholder }) {
    return (
        <Fragment>
            <span className="search">search</span>
            <input
                placeholder={placeholder}
                className="list-item-input"
                type="text"
                value={value}
                onChange={(e) => handleChange(e)}
            />
        </Fragment>
    );
}

export function ListItemCheckbox({ label, checked, onChange }) {
    return (
        <Fragment>
            <Checkbox checked={checked} onChange={onChange} />
            <span className="list-item-label">{label}</span>
        </Fragment>
    );
}

function ListItem({ all, first, children }) {
    return (
        <div
            className={`list-item ${all ? "all" : ""} ${first ? "first" : ""}`}
        >
            {children}
        </div>
    );
}

ListItemInput.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    handleChange: PropTypes.func,
};

ListItemCheckbox.propTypes = {
    label: PropTypes.string,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};

ListItem.propTypes = {
    all: PropTypes.bool,
};

export default ListItem;
