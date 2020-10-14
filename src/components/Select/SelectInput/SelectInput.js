import React from "react";
import PropTypes from "prop-types";

import formatInput from "../../../util/formatInput";

import "./SelectInput.css";

function SelectInput({
    active,
    inputLabel,
    onClick,
    label,
    selected,
    maxInputElements,
}) {
    return (
        <div
            className={`select-input ${active ? "active" : ""}`}
            onClick={onClick}
        >
            <div className="select-input-label">{label}</div>
            <div className="select-input-container">
                <p>{formatInput(selected, inputLabel, maxInputElements)}</p>
                <span className="arrow">play_arrow</span>
            </div>
        </div>
    );
}

SelectInput.propTypes = {
    active: PropTypes.bool,
    inputLabel: PropTypes.string,
    onClick: PropTypes.func,
    label: PropTypes.string,
    selected: PropTypes.arrayOf(PropTypes.string),
    maxInputElements: PropTypes.number,
};

export default SelectInput;
