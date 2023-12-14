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
            content: <Icon src={Send} alt="Send" img="true" />
        },
        {
            className: ft.footer__btn,
            content: <Icon src={User} alt="User" img="true" />
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
