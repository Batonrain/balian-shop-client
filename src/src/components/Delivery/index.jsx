import React from 'react';
import delivery from './delivery.module.scss';
import Icon from '@components/Icon';
import Truck from '@img/truck.svg';
import Delivered from '@img/delivered.svg';

export default function Delivery({
	status = '',
	number = '',
	date = '',
	prise = '',
}) {
	return (
		<div className={delivery.delivery}>
			{status == 'way' ? (
				<Icon src={Truck} alt="Truck" img="true" />
			) : (
				<Icon src={Delivered} alt="delivered" img="true" />
			)}
			<div className={delivery.delivery__item_description}>
				<div className={delivery['text-column']}>
					<p className={delivery['delivery__item_description-number']}>
						{number}
					</p>
					<p className={delivery['delivery__item_description-status']}>
						{status == 'way' ? 'On the way' : 'delivered'}
					</p>
				</div>
				<div className={delivery['text-column']}>
					<p className={delivery['delivery__item_description-date']}>{date}</p>
					<p className={delivery['delivery__item_description-price']}>
						{prise}
					</p>
				</div>
			</div>
		</div>
	);
}
