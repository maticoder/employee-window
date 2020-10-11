import React, { useState } from "react";

// import data
// import data from "../../util/data";
import { positions, localizations, conditions } from "../../util/categories";

// import components
import Select from "../Select/Select";
import Button from "../Button/Button";

import "./Window.css";

function Window() {
    const [selectedPositions, setSelectedPositions] = useState([]);
    const [selectedLocalizations, setSelectedLocalizations] = useState([]);
    const [selectedConditions, setSelectedConditions] = useState([]);

    const handleButtonClick = () => {
        console.log(selectedPositions);
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
                setSelected={setSelectedPositions}
            />
            <Select
                label="Lokalizacje"
                allLabel="Wszystkie"
                inputLabel="Wybierz..."
                searchLabel="Szukaj..."
                options={localizations}
                selected={selectedLocalizations}
                setSelected={setSelectedLocalizations}
            />
            <Select
                label="Warunki zatrudnienia"
                allLabel="Wszystkie"
                inputLabel="Wybierz..."
                searchLabel="Szukaj..."
                options={conditions}
                selected={selectedConditions}
                setSelected={setSelectedConditions}
            />
            <div className="button-container">
                <Button text="Wyświetl" onClick={handleButtonClick} />
            </div>
        </div>
    );
}

export default Window;
