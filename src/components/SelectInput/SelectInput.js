import React from "react";
import PropTypes from "prop-types";

import "./SelectInput.css";

function SelectInput({ active, onClick, label, selected }) {
    const getSelected = (selected) => {
        if (selected.length === 0) {
            return "Wybierz...";
        } else if (selected.length === 1) {
            return `${selected[0]}`;
        } else if (selected.length === 2) {
            return `${selected[0]}, ${selected[1]}`;
        } else {
            return `${selected[0]}, ${selected[1]} +${selected.length - 2}`;
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
    onClick: PropTypes.func,
    label: PropTypes.string,
    selected: PropTypes.arrayOf(PropTypes.string),
};

export default SelectInput;
