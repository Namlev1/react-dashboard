import React, { useState } from "react";
import './ToggleWithImage.css';
const ToggleWithImage = ({ label, svgImage }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="toggle-container">
            <div className={`toggle-box ${isChecked ? "checked" : "unchecked"}`} onClick={handleToggle}>
                {isChecked && <img src={svgImage} alt="Checked Icon" className="toggle-icon" />}
            </div>
            <label onClick={handleToggle} className="toggle-label">
                {label}
            </label>
        </div>
    );
};

export default ToggleWithImage