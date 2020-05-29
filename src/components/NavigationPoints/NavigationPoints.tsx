import React, {useEffect, useState} from 'react';
import './NavigationPoints.scss';

const NavigationPoints = () => {

    const [index, setIndex] = useState<number>(0);

    const onScroll = () => {
        const scrollHeight = window.scrollY;
        const scrollSlice = Math.ceil(document.documentElement.scrollHeight / 3);
        setIndex(Math.floor(scrollHeight / scrollSlice));
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    const points = [
        {
            id: 0
        },
        {
            id: 1
        },
        {
            id: 2
        }
    ];

    const pointsJSX = points.map((p: any) => <div className={`navigation-point ${p.id === index ? 'active' : ''}`}
                                                  key={p.id}/>);

    return (
        <div className="navigation-points">
            {pointsJSX}
        </div>
    );
};

export default NavigationPoints;
