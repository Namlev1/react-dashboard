import DropdownTriangle from '../../atoms/Icons/DropdownTriangle.svg';
import React, { useState, useEffect, useRef } from "react";
import "./DropdownMenu.css";

const DropdownMenu = ({ options, title }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="dropdown-container" ref={dropdownRef}>
            <div className="dropdown-title">{title || "Select an option"}</div>
            <button className="dropdown-button" onClick={toggleMenu}>
                {title || "Select an option"}
                <img src={DropdownTriangle} alt="Gear Icon" className="dropdownTriangle"/>
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