import React, { useState, useEffect } from 'react';

import Cycle from '../assets/cycle.png';

const INTIAL_POSITION = -100;
const { width } = window.screen;

const Cycling = () => {
    const [x, setX] = useState(INTIAL_POSITION);

    const setPosition = () => {
        setTimeout(() => {
            if(x < width + INTIAL_POSITION) {
                setX(x + 2);
            } else {
                setX(INTIAL_POSITION);
            }
        }, 0)
    }

    useEffect(() => {
        setPosition();
    })

    return (
        <div className="cycle-area">
            <div style={{ left: `${x}px` }} className="cycle-image">
                <img src={Cycle} alt="cycle" />
            </div>
        </div>
    )
}

export default Cycling;