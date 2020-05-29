import React from 'react';
import './IcebergTop.scss';
import iceberg_top from '../../assets/iceberg-top.png';
import AnimatedPoints from "../AnimatedPoints/AnimatedPoints";

const IcebergTop = () => {
    return (
        <div className="iceberg-top" style={{backgroundImage: `url(${iceberg_top})`}}>
            <AnimatedPoints/>
        </div>
    );
};

export default IcebergTop;
