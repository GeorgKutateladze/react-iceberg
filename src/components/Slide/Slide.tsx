import React, {useEffect, useRef} from 'react';
import './Slide.scss';
import {ISlide} from "../DeepWaters/DeepWaters";
import ice1 from "../../assets/IceBottomTabs/ice1.png";
import ice2 from "../../assets/IceBottomTabs/ice2.png";
import ice3 from "../../assets/IceBottomTabs/ice3.png";

interface IProps {
    item: ISlide
}

const Slide: React.FC<IProps> = ({item}) => {

    const chunk1 = useRef<HTMLDivElement>(null);
    const chunk2 = useRef<HTMLDivElement>(null);
    const chunk3 = useRef<HTMLDivElement>(null);

    const onScroll = () => {
        if (chunk2.current) {
            const y = -window.scrollY * 0.1;
            chunk2.current.style.transform = `translateY(${y}px)`
        }
        if (chunk3.current) {
            const y = -window.scrollY * 0.1;
            chunk3.current.style.transform = `translateY(${y}px)`
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <div className="slide">
            <p className="slide-label">{item.label}</p>
            <div
                className="ice-chunk ice-chunk_1"
                ref={chunk1}
                style={{
                    backgroundImage: `url(${ice1})`,
                    top: `${item.coordinates1[0]}%`,
                    right: `${item.coordinates1[1]}%`
                }}>

            </div>
            <div
                className="ice-chunk ice-chunk_2"
                ref={chunk2}
                style={{
                    backgroundImage: `url(${ice2})`,
                    top: `${item.coordinates2[0]}%`,
                    right: `${item.coordinates2[1]}%`
                }}>

            </div>
            <div
                className="ice-chunk ice-chunk_3"
                ref={chunk3}
                style={{
                    backgroundImage: `url(${ice3})`,
                    top: `${item.coordinates3[0]}%`,
                    right: `${item.coordinates3[1]}%`
                }}>

            </div>
        </div>
    );
};

export default Slide;
