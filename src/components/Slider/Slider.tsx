import React, {useEffect, useRef} from 'react';
import './Slider.scss';

interface IProps {
    setIndex: (n: number) => void;
}

const Slider: React.FC<IProps> = ({setIndex}) => {

    const slider = useRef<HTMLDivElement>(null);
    const timeline = useRef<HTMLDivElement>(null);

    let x: number = 0;
    let initialX: number = -1;
    let dragging: boolean = false;

    const mouseDown = () => {
        dragging = true;
        if (initialX < 0 && slider.current) {
            initialX = slider.current.getBoundingClientRect().x;
            console.log(initialX)
        }
    };

    const mouseUp = () => {
        dragging = false;
    };

    const mouseMove = (event: React.MouseEvent | MouseEvent) => {
        event.preventDefault();

        if (dragging && slider.current && timeline.current) {
            const maxW = timeline.current.getBoundingClientRect().width - slider.current.offsetWidth;
            x = (event.clientX - slider.current.offsetWidth / 2) - initialX;

            if (x < 0) {
                x = 0;
            }
            if (x > maxW) {
                x = maxW+2;
            }
            slider.current.style.transform = `translate(${x}px)`;
            setIndex(Math.floor((x*100 / maxW)/50));
        }
    };

    useEffect(() => {
        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseup", mouseUp);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseup", mouseUp);
        };
    }, []);

    return (
        <div className="slider">
            <div className="timeline" ref={timeline}>
                <div className="timeline-slider"
                     ref={slider}
                     onMouseDown={mouseDown}
                     onMouseUp={mouseUp}
                     onMouseMove={mouseMove}></div>
            </div>
            <div className="times">
                <p className="time">2000</p>
                <p className="time">2010</p>
                <p className="time">2020</p>
            </div>
        </div>
    );
};

export default Slider;
