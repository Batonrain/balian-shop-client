import React from 'react';
import card from './card.module.scss';
import { Link } from 'react-router-dom';
import Button from '@components/Button';
import Icon from '@components/Icon';

export function BasketCard({ bg, flask, cardSimpleNameItem, children, classNameCard, onClickXmark }) {
    return (
      <div className={card.card__simple + ' ' + classNameCard}>
        <Link to="/product">
          {bg && (
            <div className={card.card__simple_bg}>
              <img loading="lazy" src={bg} alt="bg" />
            </div>
          )}
          {flask && (
            <div className={card.card__simple_flask}>
              <img loading="lazy" src={flask} alt="flask" />
            </div>
          )}
        </Link>
        <div className={card.card__simple_text + ' ' + card['card__simple_basket']}>
          <div className={card.card__simple_text_basket}>
            <div className={card['card__simple_text-title'] + ' ' + card['card__simple_text-title-ww']}>
              {cardSimpleNameItem}
              <p className={card['card__simple_text-subtitle']}>100% pure</p>
            </div>
            <Button
              content={<Icon icon="fa-solid fa-xmark" />}
              onClick={onClickXmark}
              className={card.card__simple_basket_remove}
            />
          </div>
          {children}
        </div>
      </div>
    );
  }