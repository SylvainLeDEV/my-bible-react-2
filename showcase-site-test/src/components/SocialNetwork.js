import React from 'react';

const SocialNetwork = () => {

    const anim = () => {
        const icons = document.querySelectorAll('.social-network a');

        icons.forEach(( link ) => {
            link.addEventListener('mouseover', (e) => {
                link.style.transform = `translate( ${e.offsetX - 20}px, ${e.offsetY - 13}px)`;
            });
            link.addEventListener('mouseout', (e) => {
                link.style.transform = 'translate(0, 0)';
            });
        })

    }

    return (
        <div className='social-network'>
            <ul className="content">
                <a href="https://facebook.com"
                   target='_blank'
                   rel='noopener noreferrer'
                   className='hover'
                   onMouseOver={anim}>
                    <i className='fab fa-facebook-f'></i>
                </a>


                <a href="https://twitter.com" target='_blank' rel='noopener noreferrer' className='hover' onMouseOver={anim}>
                    <i className='fab fa-twitter'></i>
                </a>

                <a href="https://linkedin.com" target='_blank' rel='noopener noreferrer' className='hover' onMouseOver={anim}>
                    <i className='fab fa-linkedin'></i>
                </a>
            </ul>
        </div>
    );
};

export default SocialNetwork;