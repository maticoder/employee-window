import React from "react";
import PropTypes from "prop-types";

import Checkbox from "../Checkbox/Checkbox";

import "./ListItem.css";

function ListItem({ label, checked, onChange }) {
    return (
        <div className="list-item">
            <Checkbox checked={checked} onChange={onChange} />
            <span className="list-item-label">{label}</span>
        </div>
    );
}

ListItem.propTypes = {
    label: PropTypes.string,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default ListItem;
