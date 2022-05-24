import React, {useEffect} from 'react';

const Mouse = () => {

    useEffect(() => {
        const cursor = document.querySelector('.cursor');

        window.addEventListener('mousemove', e => {
            cursor.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px;`);
        });

        const hoverLink = document.querySelectorAll('.hover');

        hoverLink.forEach((link) => {
            link.addEventListener('mouseover', () => {
                cursor.classList.add('hovered');
            });
            link.addEventListener('mouseleave', () => {
                cursor.style.transition = '.3s ease-out';
                cursor.classList.remove('hovered');
            });
        });

    }, []);

    return (
        <div className='cursor'></div>
    );
};

export default Mouse;