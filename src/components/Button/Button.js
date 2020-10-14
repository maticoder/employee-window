import React from "react";
import PropTypes from "prop-types";

import "./Button.css";

function Button({ text, onClick }) {
    return (
        <button onClick={onClick} className="window-button">
            {text}
        </button>
    );
}

export default Button;

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};
