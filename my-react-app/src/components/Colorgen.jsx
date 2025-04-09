import { useState } from 'react';
import '/src/index.css'
function Colorgen() {

    const [color, setColor] = useState('#7607bd');
    const [hexEnabled, setHexEnabled] = useState(true);
    const [rbgEnabled, setRgbEnabled] = useState(false);

    function toggleHex() {
        setHexEnabled(true);
        setRgbEnabled(false);

    }

    function toggleRgb() {
        setHexEnabled(false);
        setRgbEnabled(true);

    }
    function createHexcolor() {
        let hex = '#';
        const hexChars = '0123456789abcdef';

        for (let i = 0; i < 6; i++) {
            hex += hexChars[Math.floor(Math.random() * 16)];
        }
        setColor(hex);
    }
    function createRgbcolor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const rgb = `rgb(${r},${g},${b})`;
        setColor(rgb);
    }

    function generateRandomColor() {
        if (hexEnabled) {
            createHexcolor();

        }
        else if (rbgEnabled) {
            createRgbcolor();

        }
    }


    return (
        <div className="colorgen" style={{ backgroundColor: color }}>
            <h1>Random color generator</h1>
            <div className='btn'>
                <button onClick={toggleHex}>Hex Color</button>
                <button onClick={toggleRgb}>RGB Color</button>
                <button onClick={generateRandomColor}>Generate random color</button></div>

            <div className='colorbox' style={{
                color: color === "#FFFFFF" || color === "rgb(255, 255, 255)" ? "black" : "white"
            }} > {color}</div>

        </div>
    );
}

export default Colorgen;