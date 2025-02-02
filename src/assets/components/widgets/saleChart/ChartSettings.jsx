import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import GearIcon from '../../atoms/Icons/GearIcon.svg';
import './SaleChart.css'
import DropdownMenu from "../../molecules/DropdownMenu/DropdownMenu.jsx";
import ToggleWithImage from "../../molecules/Toggle/ToggleWithImage.jsx";
import Cross from "../../atoms/Icons/Cross.svg";
import {
    setChosenChartType,
    setChosenMetric,
    setChosenPeriod
} from "../../../../store/accountSlice.js";

const ChartSettings = () => {
    const [isOpen, setIsOpen] = useState(false);
    const settingsRef = useRef(null);

    const chosenPeriod = useSelector((store) => store.accountSlice.chosenPeriod);
    const chosenMetric = useSelector((store) => store.accountSlice.chosenMetric);
    const chosenChartType = useSelector((store) => store.accountSlice.chosenChartType);

    const dispatch = useDispatch();

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

    const handlePeriodSelect = (option) => {
        dispatch(setChosenPeriod(option));
    };
    const handleMetricSelect = (option) => {
        dispatch(setChosenMetric(option));
    };
    const handleChartTypeSelect = (option) => {
        dispatch(setChosenChartType(option));
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
                            "Today",
                            "This week",
                            "This month",
                            "Last month"
                        ]}
                        onOptionSelect={handlePeriodSelect}
                        storeVariable={chosenPeriod}

                    />
                    <DropdownMenu
                        title={'Metric' || "Select an option"}
                        options={[
                            "Products sold",
                            "Income"
                        ]}
                        onOptionSelect={handleMetricSelect}
                        storeVariable={chosenMetric}

                    />
                    <DropdownMenu
                        title={'Chart Type' || "Select an option"}
                        options={[
                            "Bar plot",
                            "Line plot"
                        ]}
                        onOptionSelect={handleChartTypeSelect}
                        storeVariable={chosenChartType}

                    />

                        <ToggleWithImage
                            label="Show last period"
                            svgImage={Cross}
                        />


                    </div>
            )}

        </div>
    );
};

export default ChartSettings;