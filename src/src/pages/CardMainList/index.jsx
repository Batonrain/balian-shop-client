import React from 'react'
import cardList from './cardMainList.module.scss'
import Card from '@components/Card'
import ButtonGroup from '@components/ButtonGroup'
import Icon from '@components/Icon'
import Bg1 from '@img/bg1.jpg'
import Bg2 from '@img/bg2.jpg'
import Bg3 from '@img/bg3.jpg'
import Flask1 from '@img/flask 1.png'

export default function CardMainList() {
    const btn = [
        {
            content: "60 T",
            className: cardList.cardList__groups_btn
        },
        {
            content: "25k Rp",
            className: cardList.cardList__groups_btn
        },
        {
            content: <Icon icon="fa-cart-shopping" />,
            className: cardList.cardList__groups_btn
        },
    ]

  return (
    <div className={cardList.cardList}>
        <Card bg={Bg2} flask={Flask1} classNameCard={cardList.cardList__item}>
            <ButtonGroup buttons={btn} classGroups={cardList.cardList__groups} />
        </Card>
        <Card bg={Bg3} flask={Flask1} classNameCard={cardList.cardList__item} >
            <ButtonGroup buttons={btn} classGroups={cardList.cardList__groups} />
        </Card>
        <Card bg={Bg1} flask={Flask1} classNameCard={cardList.cardList__item}>
            <ButtonGroup buttons={btn} classGroups={cardList.cardList__groups} />
        </Card>
        <Card bg={Bg2} flask={Flask1} classNameCard={cardList.cardList__item}>
            <ButtonGroup buttons={btn} classGroups={cardList.cardList__groups} />
        </Card>
        <Card bg={Bg3} flask={Flask1} classNameCard={cardList.cardList__item} >
            <ButtonGroup buttons={btn} classGroups={cardList.cardList__groups} />
        </Card>
        <Card bg={Bg1} flask={Flask1} classNameCard={cardList.cardList__item}>
            <ButtonGroup buttons={btn} classGroups={cardList.cardList__groups} />
        </Card>
    </div>
  )
}
