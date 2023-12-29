import React, { useState } from 'react';
import card from './card.module.scss';
import { Link } from 'react-router-dom';
import Button from '@components/Button';
import Icon from '@components/Icon';
import basket from '@pages/Basket/basket.module.scss';
import Switches from '@components/Switches';
import ButtonGroup from '@components/ButtonGroup';
import TW from '@img/t-white.svg';

export function BasketCard({ backgroundImage, flaskImage, title, product, children, classNameCard, onClickXmark }) {
  const [pt, setPt] = useState(1);

  const btn = [
    {
      content: ['1', <Icon src={TW} img={true} />],
      className: basket.basket__groups_item,
    },
    {
      content: product.pricePerItem + ' Rp',
      className: basket.basket__groups_item,
    },
  ];

  return (
    <div className={card.card__simple + ' ' + classNameCard}>
      <Link to="/product">
        {backgroundImage && (
          <div className={card.card__simple_bg}>
            <img loading="lazy" src={backgroundImage} alt="bg" />
          </div>
        )}
        {flaskImage && (
          <div className={card.card__simple_flask}>
            <img loading="lazy" src={flaskImage} alt="flask" />
          </div>
        )}
      </Link>
      <div className={card.card__simple_text + ' ' + card['card__simple_basket']}>
        <div className={card.card__simple_text_basket}>
          <div className={card['card__simple_text-title'] + ' ' + card['card__simple_text-title-ww']}>
            {title}
            <p className={card['card__simple_text-subtitle']}>100% pure</p>
          </div>
          <Button
            content={<Icon icon="fa-solid fa-xmark" />}
            onClick={onClickXmark}
            className={card.card__simple_basket_remove}
          />
        </div>
        {children}
        <div className={basket.basket__content}>
          <div className={basket.basket__content_ml}>{product.size}</div>
          <Switches
            type="btn"
            classNameButton={basket['basket__switch-btn']}
            onClickMinus={() => (pt > 1 ? setPt(pt - 1) : '')}
            onClickPlus={() => setPt(pt + 1)}
            pt={product.count}
            onSelect={(selectedValue) => console.log(selectedValue)}
          />
          <ButtonGroup buttons={btn} classGroups={basket.basket__groups} />
        </div>
      </div>

    </div>
  );
}