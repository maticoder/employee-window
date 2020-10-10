import React, { useState } from "react";

// import data
import data from "../../util/data";
import { positions, localizations, conditions } from "../../util/categories";

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

    const handlePositionChange = (position) => {
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
                allLabel="Wszystkie"
                inputLabel="Wybierz..."
                searchLabel="Szukaj..."
                options={positions}
                selected={selectedPositions}
                handleElementChange={handlePositionChange}
            />
            <div className="button-container">
                <Button text="Wyświetl" onClick={handleButtonClick} />
            </div>
        </div>
    );
}

export default Window;
