import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import DropdownTriangle from '../../atoms/Icons/DropdownTriangle.svg';
import './DropdownMenu.css'

const DropdownMenu = ({ options, title, onOptionSelect, storeVariable, customWidth}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const chosenOrdersSort = useSelector((store) => storeVariable);
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

    const handleOptionClick = (option) => {
        onOptionSelect(option);
        setIsOpen(false);
    };

    return (
        <div className="dropdown-container" ref={dropdownRef}
             style={{ width: customWidth || "90%" }}>
            <div className="dropdown-title">{title || "Select an option"}</div>
            <button className="dropdown-button" onClick={toggleMenu}>
                {chosenOrdersSort || "Select an option"}
                <img src={DropdownTriangle} alt="Dropdown triangle" className="dropdownTriangle"/>
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    {options.map((option, index) => (
                        <li key={index} className="dropdown-item" onClick={() => handleOptionClick(option)}>
                            {option}

                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;