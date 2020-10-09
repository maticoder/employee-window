import React from "react";

import Checkbox from "../Checkbox/Checkbox";

import "./ListItem.scss";

function ListItem({ label, checked, onClick }) {
    return (
        <div className="list-item">
            <Checkbox checked={checked} onClick={onClick} />
            <span className="list-item-label">{label}</span>
        </div>
    );
}

export default ListItem;
