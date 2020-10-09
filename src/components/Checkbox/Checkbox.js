import React from "react";
import PropTypes from "prop-types";

import "./Checkbox.css";

const Checkbox = ({ checked, onChange }) => {
    return (
        <div className="checkbox">
            <span>{checked && "done"}</span>
            <input checked={checked} onChange={onChange} type="checkbox" />
        </div>
    );
};

Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Checkbox;
