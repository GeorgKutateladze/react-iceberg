import React, {useEffect, useRef} from 'react';
import './IcebergBottom.scss';
import iceberg_bottom from '../../assets/iceberg-bottom.png';
import ice1 from '../../assets/IceChunks/Ice1.png';
import ice2 from '../../assets/IceChunks/Ice2.png';
import ice3 from '../../assets/IceChunks/Ice3.png';
import ice4 from '../../assets/IceChunks/Ice4.png';

const IcebergBottom = () => {

    const chunk1 = useRef<HTMLImageElement>(null);
    const chunk2 = useRef<HTMLImageElement>(null);
    const chunk3 = useRef<HTMLImageElement>(null);
    const chunk4 = useRef<HTMLImageElement>(null);

    const onScroll = () => {
        if (chunk1.current) {
            const y = -window.scrollY * 0.19;
            chunk1.current.style.transform = `translateY(${y}px)`
        }
        if (chunk2.current) {
            const y = -window.scrollY * 0.6;
            chunk2.current.style.transform = `translateY(${y}px)`
        }
        if (chunk3.current) {
            const y = -window.scrollY * 0.2;
            chunk3.current.style.transform = `translateY(${y}px)`
        }
        if (chunk4.current) {
            const y = -window.scrollY * 0.1;
            chunk4.current.style.transform = `translateY(${y}px)`
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <div className="iceberg-bottom" style={{backgroundImage: `url(${iceberg_bottom})`}}>
            <img src={ice1} alt="" className="iceberg-chunk ice-1" ref={chunk1}/>
            <img src={ice2} alt="" className="iceberg-chunk ice-2" ref={chunk2}/>
            <img src={ice3} alt="" className="iceberg-chunk ice-3" ref={chunk3}/>
            <img src={ice4} alt="" className="iceberg-chunk ice-4" ref={chunk4}/>
        </div>
    );
};

export default IcebergBottom;
