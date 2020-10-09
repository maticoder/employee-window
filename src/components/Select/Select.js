import React from "react";

import "./Select.css";

function Select({ label, options, selected, handleAdd }) {
    return (
        <div>
            <label>{label}</label>
            <div>
                {options.map((option) => (
                    <p key={option} onClick={() => handleAdd(option)}>
                        {selected.includes(option) && "tak"} {option}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Select;
