import React from "react";
import PropTypes from "prop-types";

import "./Button.css";

function Button(props) {
    const { text } = props;

    return (
        <button {...props} className="window-button">
            {text}
        </button>
    );
}

export default Button;

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};
