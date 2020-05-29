import React, {useRef} from 'react';
import './DeepWaters.scss';
import deep_waters from "../../assets/deep-waters.png";
import Slider from "../Slider/Slider";
import Slide from "../Slide/Slide";

export interface ISlide {
    label: string;
    coordinates1: [number, number];
    coordinates2: [number, number];
    coordinates3: [number, number];
}

const DeepWaters = () => {

    const slidesRef = useRef<HTMLDivElement>(null);

    const items: ISlide[] = [
        {
            label: '2000',
            coordinates1: [5, 5],
            coordinates2: [30, 30],
            coordinates3: [60, 70]
        },
        {
            label: '2010',
            coordinates1: [5, 40],
            coordinates2: [30, 90],
            coordinates3: [70, 70]
        },
        {
            label: '2020',
            coordinates1: [5, 90],
            coordinates2: [40, 60],
            coordinates3: [80, 90]
        }
    ];

    const translateSlider = (n: number) => {
        if (slidesRef.current) {
            slidesRef.current.style.transform = `translateX(${(n - (items.length-1)) * 33.3}%)`;
            console.log(n, slidesRef.current.style.transform)
        }
    };

    const slides = items.map((s: ISlide) =>
        <Slide item={s} key={s.label}/>
    );

    console.log(slidesRef);

    return (
        <div className="deep-waters" style={{backgroundImage: `url(${deep_waters})`}}>
            <div className="deep-waters__slider" ref={slidesRef}>
                {slides}
            </div>
            <Slider setIndex={translateSlider}/>
        </div>
    );
};

export default DeepWaters;
