import React, { useState } from "react";

// import data
import data from "../../util/data";
import { positions, localizations, conditions } from "../../util/categories";

// import components
import Select from "../Select/Select";
import Calendar from "../Calendar/Calendar";
import Button from "../Button/Button";

import "./Window.css";

function Window() {
    const [selectedPositions, setSelectedPositions] = useState([]);
    const [selectedLocalizations, setSelectedLocalizations] = useState([]);
    const [selectedConditions, setSelectedConditions] = useState([]);

    const [selectedEmployees, setSelectedEmployees] = useState([]);

    const filteredEmployees = () => {
        return data
            .filter((employee) =>
                selectedPositions.length === 0
                    ? true
                    : selectedPositions.includes(employee.stanowisko)
            )
            .filter((employee) =>
                selectedLocalizations.length === 0
                    ? true
                    : employee.lokalizacja.some((localization) =>
                          selectedLocalizations.includes(localization)
                      )
            )
            .filter((employee) =>
                selectedConditions.length === 0
                    ? true
                    : selectedConditions.includes(employee.warunki)
            )
            .map((employee) => employee.pracownik);
    };

    const handleButtonClick = () => {
        console.log(selectedPositions);
    };

    return (
        <div className="window">
            <h1>Wybierz pracowników</h1>
            <Calendar label="Okres" inputLalbe="Wybierz..." />
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
                label="Pracownicy"
                allLabel="Wszyscy"
                inputLabel="Wybierz..."
                searchLabel="Szukaj..."
                options={filteredEmployees()}
                selected={selectedEmployees}
                setSelected={setSelectedEmployees}
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
