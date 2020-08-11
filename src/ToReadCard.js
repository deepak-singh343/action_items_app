import React from 'react';

function ToReadCard({toread}) {
    return (
        <div className='toread_card_container'>
            <div className='upper'>
                <div className='id'>
                    <span>{toread.number}</span>
                </div>
                <div className='image'>
                    <img src={toread.image} alt='read'/>
                </div>
            </div>
            <div className='lower'>
                <div className='title'>
                    {toread.title}
                </div>
                <div className='readCardIcon'>
                    <img src={toread.icon} alt='icon'/>
                </div>
            </div>
        </div>
    );
}

export default ToReadCard;