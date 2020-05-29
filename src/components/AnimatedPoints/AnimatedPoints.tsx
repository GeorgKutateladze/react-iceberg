import React from 'react';
import './AnimatedPoints.scss';

const AnimatedPoints = () => {
    return (
        <div className="animated-points__outer">
            <div className="animated-points__inner"></div>
            <div className="animated-points__inner animated-points__dynamic"></div>
        </div>
    );
};

export default AnimatedPoints;
