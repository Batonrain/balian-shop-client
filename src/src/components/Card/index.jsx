import React from 'react'
import card from './card.module.scss';

export default function Card({ 
    children,
    bg = '',
    flask = '',
    typeCard = 'simple',
    classNameCard = '',
    cardSimpleNameItem = 'name'
    })
    {
  return (
    <>
        { typeCard === 'simple' ? 
           <div className={card.card__simple + " " + classNameCard}>
                { bg ? 
                <div className={card.card__simple_bg}>
                    <img lazy src={bg} alt="bg" /> 
                </div>
                    : 
                ''
                }
                { flask ? 
                    <div className={card.card__simple_flask}>
                        <img lazy src={flask} alt="flask" /> 
                    </div>
                    : 
                ''
                }
                <div className={card.card__simple_text}>
                    <p className={card['card__simple_text-title']}>{cardSimpleNameItem}</p>
                    <p className={card['card__simple_text-subtitle']}>100% pure</p>
                </div>
                {children}
            </div>
           :
        ''}
    </>
  )
}
