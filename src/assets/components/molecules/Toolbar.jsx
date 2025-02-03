import React, { useState } from 'react';
import './Toolbar.css';
import {DarkModeToggle} from "../atoms/DarkModeButton.jsx";
import LanguageIcon from '../atoms/Icons/LanguageIcon.svg';

const Toolbar = () => {
    const [isShopDropdownOpen, setShopDropdownOpen] = useState(false);
    const [isAccountDropdownOpen, setAccountDropdownOpen] = useState(false);

    const toggleShopDropdown = () => {
        setShopDropdownOpen(!isShopDropdownOpen);
    };

    const toggleAccountDropdown = () => {
        setAccountDropdownOpen(!isAccountDropdownOpen);
    };

    return (
        <div className="toolbar">
            <div className="toolbar-content-left">
                <DarkModeToggle/>
                <img src={LanguageIcon} alt="Sun Icon" width="30" height="30"/>
                En
            </div>


            <div className="toolbar-content-right">
                <div className="divider" />
                <div className="shop-dropdown" onClick={toggleShopDropdown}>
                    Shop
                    <span className="arrow">▼</span>
                    {isShopDropdownOpen && (
                        <div className="toolbar-dropdown-menu">
                            <div className="toolbar-dropdown-item">Shop 1</div>
                            <div className="toolbar-dropdown-item">Shop 2</div>
                            <div className="toolbar-dropdown-item">Shop 3</div>
                        </div>
                    )}
                </div>
                <div className="divider" />
                <div className="account-dropdown" onClick={toggleAccountDropdown}>
                    Username
                    <span className="arrow">▼</span>
                    {isAccountDropdownOpen && (
                        <div className="toolbar-dropdown-menu">
                            <div className="toolbar-dropdown-item">Settings</div>
                            <div className="toolbar-dropdown-item">Help</div>
                            <div className="toolbar-dropdown-item">Switch account</div>
                            <div className="toolbar-dropdown-item">Log out</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Toolbar;