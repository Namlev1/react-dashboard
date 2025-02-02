import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import GearIcon from '../../atoms/Icons/GearIcon.svg';
import './SaleChart.css'
import DropdownMenu from "../../molecules/DropdownMenu/DropdownMenu.jsx";

const ChartSettings = ({ options, title, onOptionSelect, storeVariable}) => {
    const [isOpen, setIsOpen] = useState(false);
    const settingsRef = useRef(null);

    const chosenOrdersSort = useSelector((store) => storeVariable);
    const toggleSettings = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (settingsRef.current && !settingsRef.current.contains(event.target)) {
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
        <div className="settings-container" ref={settingsRef}>
            <button className="settings-button" onClick={toggleSettings}>
                <img src={GearIcon} alt="Gear Icon" className="gear-icon"/>
            </button>
            {isOpen && (

                    <div className="settings-frame">
                    <DropdownMenu
                        title={'Period' || "Select an option"}
                        options={[
                            "Best to worst",
                            "Worst to best"
                        ]}

                    />
                    <DropdownMenu
                        title={'Metric' || "Select an option"}
                        options={[
                            "Best to worst",
                            "Worst to best"
                        ]}

                    />
                    <DropdownMenu
                        title={'Chart Type' || "Select an option"}
                        options={[
                            "Best to worst",
                            "Worst to best"
                        ]}

                    />


                    </div>
            )}

        </div>
    );
};

export default ChartSettings;