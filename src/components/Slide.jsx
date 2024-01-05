import React from 'react'
import { FaRegCircle } from "react-icons/fa"

function Slide({ next, setNext }) {
    const scrollToTop = () => {
        const element = document.getElementById('munkaim');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start'});
        }
    };

    const handleSetActive = (index) => {
        setNext(index);
        scrollToTop();
    };

    return (
        <div className="works-next">
            <FaRegCircle onClick={() => handleSetActive(1)} className={next === 1 && 'works-next-circle'} />
            <FaRegCircle onClick={() => handleSetActive(2)} className={next === 2 && 'works-next-circle'} />
        </div>
    )
}

export default Slide