import React from "react";
import PropTypes from "prop-types";

import "./SelectInput.css";

function SelectInput({
    active,
    inputLabel,
    onClick,
    label,
    selected,
    maxInputElements,
}) {
    const getSelected = (selected) => {
        if (selected.length === 0) {
            return inputLabel;
        } else if (selected.length <= maxInputElements) {
            let output = "";
            output += selected[0];
            for (let i = 1; i < selected.length; i++) {
                output += ", " + selected[i];
            }
            return output;
        } else {
            let output = "";
            output += selected[0];
            for (let i = 1; i < maxInputElements; i++) {
                output += ", " + selected[i];
            }
            output += " +" + (selected.length - maxInputElements).toString();
            return output;
        }
    };

    return (
        <div
            className={`select-input ${active ? "active" : ""}`}
            onClick={onClick}
        >
            <div className="select-input-label">{label}</div>
            <div className="select-input-container">
                <p>{getSelected(selected)}</p>
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
