import React, {useEffect, useRef, useState} from 'react';
import './OrderView.css'
import Cross from "../../atoms/Icons/Cross.svg";

const OrderView = (props) => {
    const settingsRef = useRef(null);

    const handleClickOutside = (event) => {
        // Sprawdzamy, czy kliknięto poza kontenerem
        if (settingsRef.current && !settingsRef.current.contains(event.target)) {
            props.onClick(); // Wywołanie props.onClick
        }
    };

    useEffect(() => {
        // Nasłuchiwanie kliknięcia poza komponentem
        document.addEventListener("mousedown", handleClickOutside);

        // Sprzątanie po efekcie (usuniecie nasłuchiwacza)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        // Przypisujemy ref do głównego kontenera
        <div ref={settingsRef}>
            <div className="order-view-container">
                <div className="order-view-frame">
                    <div className="close-button" onClick={props.onClick}>
                        <img src={Cross} alt="Checked Icon" className="close-icon" />
                    </div>
                    <div className="spacer">Order Details</div>
                    <div className="field-title">Id</div>
                    <div className="order-details-background">
                        {props.id}
                    </div>
                    <div className="field-title">Name</div>
                    <div className="order-details-background">
                        {props.name}
                    </div>
                    <div className="field-title">Buyer</div>
                    <div className="order-details-background">
                        {props.buyer}
                    </div>
                    <div className="field-title">Date</div>
                    <div className="order-details-background">
                        {props.date}
                    </div>
                    <div className="field-title">Price</div>
                    <div className="order-details-background">
                        {props.price}
                    </div>
                    <div className="field-title">Status</div>
                    <div className="order-details-background">
                        {props.status}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderView;

