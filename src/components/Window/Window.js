import React, { useState } from "react";

// import data
import data from "../../util/data";
import { positions, localizations, conditions } from "../../util/categories";

// import components
import Select from "../Select/Select";
import Button from "../Button/Button";

import compareSortedArrays from "../../util/compareSortedArrays";

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
            setSelectedPositions((selected) => [...selected, position]);
        }
    };

    const handleAllPositionChange = (positions) => {
        if (
            selectedPositions.length === positions.length &&
            compareSortedArrays(positions, selectedPositions)
        ) {
            setSelectedPositions([]);
        } else {
            setSelectedPositions([...positions]);
        }
    };

    const handleLocalizationChange = (localization) => {
        if (selectedLocalizations.includes(localization)) {
            setSelectedLocalizations(
                selectedLocalizations.filter((loc) => loc !== localization)
            );
        } else {
            selectedLocalizations((selected) => [...selected, localization]);
        }
    };

    const handleAllLocalizationChange = (localizations) => {
        if (
            setSelectedLocalizations.length === localizations.length &&
            compareSortedArrays(localizations, selectedLocalizations)
        ) {
            setSelectedLocalizations([]);
        } else {
            setSelectedLocalizations([...localizations]);
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
                handleAllElementChange={handleAllPositionChange}
            />
            <Select
                label="Lokalizacje"
                allLabel="Wszystkie"
                inputLabel="Wybierz..."
                searchLabel="Szukaj..."
                options={localizations}
                selected={selectedLocalizations}
                handleElementChange={handleLocalizationChange}
                handleAllElementChange={handleAllLocalizationChange}
            />
            <div className="button-container">
                <Button text="Wyświetl" onClick={handleButtonClick} />
            </div>
        </div>
    );
}

export default Window;
