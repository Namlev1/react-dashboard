import React, { useState } from "react";
import "./DropdownMenu.css";

const DropdownMenu = ({ options, title }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-container">
            <div className="dropdown-title">{title || "Select an option"}</div>
            <button className="dropdown-button" onClick={toggleMenu}>
                {title || "Select an option"}
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    {options.map((option, index) => (
                        <li key={index} className="dropdown-item">
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;