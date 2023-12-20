import React from 'react';
import ft from './footer.module.scss';
import ButtonGroup from '@components/ButtonGroup';
import Icon from '@components/Icon';
import Send from '@img/send.svg';
import User from '@img/user.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
	const footerBtn = [
		{
			className: ft.footer__btn_send + ' ' + ft.footer__btn,
			content: <Icon src={Send} alt="Send" img="true" />,
		},
		{
			className: ft.footer__btn_user + ' ' + ft.footer__btn,
			content: (
				<Link to="profile">
					<Icon src={User} alt="User" img="true" />
				</Link>
			),
		},
		{
			className: ft.footer__btn_shop + ' ' + ft.footer__btn,
			content: (
				<Link to="basket">
					<Icon key="fa-cart-shopping" icon="fa-cart-shopping" />
					<p key="amount" className={ft['footer__btn_shop-amount']}>
						25
					</p>
				</Link>
			),
		},
	];

	return (
		<div className={ft.footer}>
			<ButtonGroup buttons={footerBtn} />
		</div>
	);
}
