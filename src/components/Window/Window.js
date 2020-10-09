import React, { useState } from "react";

// import data
import data from "../../util/data";
import positions from "../../util/positions";
import localizations from "../../util/localizations";

// import components
import Select from "../Select/Select";
import Button from "../Button/Button";

import "./Window.css";

function Window() {
    const [selectedPositions, setSelectedPositions] = useState([]);
    const [selectedLocalizations, setSelectedLocalizations] = useState([]);

    const handleButtonClick = () => {
        console.log(selectedPositions);
    };

    const handlePositionClick = (position) => {
        if (selectedPositions.includes(position)) {
            setSelectedPositions(
                selectedPositions.filter((pos) => pos !== position)
            );
        } else {
            setSelectedPositions([...selectedPositions, position]);
        }
    };

    return (
        <div className="window">
            <h1>Wybierz pracowników</h1>
            <Select
                label="Stanowiska"
                options={positions}
                selected={selectedPositions}
                handleClick={handlePositionClick}
            />
            <div className="button-container">
                <Button text="Wyświetl" onClick={handleButtonClick} />
            </div>
        </div>
    );
}

export default Window;
