import React, { useState } from 'react';
import './Toolbar.css';

const Toolbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="toolbar">
            <div className="toolbar-content">
                <div className="divider" />
                <div className="shop-dropdown" onClick={toggleDropdown}>
                    Shop
                    <span className="arrow">▼</span>
                    {isDropdownOpen && (
                        <div className="dropdown-menu">
                            <div className="dropdown-item">Shop 1</div>
                            <div className="dropdown-item">Shop 2</div>
                            <div className="dropdown-item">Shop 3</div>
                        </div>
                    )}
                </div>
                <div className="divider" />
                <div className="username">Username</div>
            </div>
        </div>
    );
};

export default Toolbar;