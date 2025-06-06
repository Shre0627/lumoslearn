import { useState } from "react";
import "../styles/menupanel.css"

const MenuPanel = ({ isOpen, onClose }) => {
    return (
        <div id="side-menu" className={`menu ${isOpen ? "open" : ""}`}>
            <button id="close-menu" onClick={onClose}>&times;</button>
            <ul style={{ listStyleType: "none" }}>
                <li><h1>Dashboard</h1></li>
                <li><h3>Theme</h3></li>
                <li>
                <button className="side-menu-icons" id="color-pick-btn" title="Theme Color">
                    <img src="/assets/icons8-paint-palette-100.png" alt="Theme Palette" />
                </button>
                <input type="color" id="bg-color-picker" style={{ display: "none" }} />
                <button className="side-menu-icons" id="theme-reset" title="Reset Theme">
                    <img src="/assets/icons8-reset-50.png" alt="Reset Theme" />
                </button>
                </li>
                <li><h3>Sounds</h3></li>
                <li><h3>Wallpaper</h3></li>
            </ul>
        </div>
    )
}
export default MenuPanel;