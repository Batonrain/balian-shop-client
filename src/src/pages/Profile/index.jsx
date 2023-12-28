import React from 'react';
import profile from './profile.module.scss';
import { Link } from 'react-router-dom';
import Button from '@components/Button';
import Delivery from '@components/Delivery';

export default function Profile() {
	const dl = [
		{
			status: 'way',
			number: '№ 39875 4890',
			date: 'from 19.12',
			prise: '105k Rp',
		},
    {
			status: 'delivered',
			number: '№ 39875 4890',
			date: 'from 03.11',
			prise: '105',
			currency: 'ton'
		},
	];

	return (
		<div className={profile.profile}>
			<div className={profile.profile__information}>
				<div className={profile['profile__information_account']}>
					<div className="skeletons-avatar"></div>
					<p className={profile['profile__information_account-name']}>
						ALEXANDER
					</p>
				</div>
				<div className={profile.profile__information_bonuses}>
					<div className={profile['profile__information_bonuses-count']}>
						<div className={profile['bg-gift'] + ' ' + profile.bg}></div>
						<div className={profile.profile__text}>
							<p>
								<strong>14</strong>
							</p>
							<p>Bonuses</p>
						</div>
					</div>
					<div className={profile['profile__information_bonuses-refer']}>
						<div className={profile['bg-refer'] + ' ' + profile.bg}></div>
						<div className={profile.profile__text}>
							<p>
								Refer a friend and get <strong>5 bonuses</strong>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className={profile.profile__order}>
				<div className={profile.profile__order_title}>
					<p>orders</p>
				</div>
				<div className={profile.profile__order_list}>
					{dl.map((item, index) => (
						<Delivery
							key={index}
							prise={item.prise}
							status={item.status}
							date={item.date}
							number={item.number}
							currency={item.currency}
						/>
					))}
				</div>
			</div>
			<div className={profile.profile__btn}>
				<Link to={'/'}>
					<Button
						content="Go to the main page"
						className={profile['profile__btn-main']}
					/>
				</Link>
			</div>
		</div>
	);
}
