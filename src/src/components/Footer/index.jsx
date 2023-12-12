import React from 'react'
import ft from './footer.module.scss'
import ButtonGroup from '@components/ButtonGroup'
import Icon from '@components/Icon';
import Send from '@img/send.svg'
import User from '@img/user.svg'

export default function Footer() {
    const footerBtn = [
        {
            className: ft.footer__btn,
            content:  <img src={Send} alt="Send" /> 
        },
        {
            className: ft.footer__btn,
            content: <img src={User} alt="User" />  
        },
        {
            className: ft.footer__btn,
            content: <Icon icon="fa-cart-shopping" />
        }
    ]

  return (
    <div className={ft.footer}>
        <ButtonGroup buttons={footerBtn} />
    </div>
  )
}
