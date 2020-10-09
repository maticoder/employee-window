import React from "react";

import "./Select.css";

function Select({ label, options, selected, handleClick }) {
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
        <div className="select">
            <div className="select-input">
                <div className="select-input-label">{label}</div>
                <div className="select-input-container">
                    <p>{getSelected(selected)}</p>
                    <span className="arrow">play_arrow</span>
                </div>
            </div>
            <div className="select-dropdown"></div>
            <label>{label}</label>
            <div>
                {options.map((option) => (
                    <p key={option} onClick={() => handleClick(option)}>
                        {selected.includes(option) && "tak"} {option}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Select;
