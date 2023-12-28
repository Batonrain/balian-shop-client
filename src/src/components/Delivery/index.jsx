import React, { useState } from 'react';
import delivery from './delivery.module.scss';
import Icon from '@components/Icon';
import Button from '@components/Button';
import Truck from '@img/truck.svg';
import Delivered from '@img/delivered.svg';
import T from '@img/t.svg';
import DeliveryDetails from '@components/DeliveryDetails';

export default function Delivery({
	status = '',
	number = '',
	date = '',
	prise = '',
	currency = '',
}) {
	const [open, setOpen] = useState(false);
	console.log(open);

	return (
		<div className={delivery.delivery}>
			<div className={delivery.delivery__content}>
				{status == 'way' ? (
					<Icon src={Truck} alt="Truck" img="true" />
				) : (
					<Icon src={Delivered} alt="delivered" img="true" />
				)}
				<div className={delivery.delivery__item_description}>
					<div className={delivery['text-column']}>
						<span className={delivery['delivery__item_description-number']}>
							{number}
							<Button
								content={<Icon icon="chevron-down" />}
								className={open ? delivery['active'] : ''}
								onClick={() => setOpen((prev) => !prev)}
							/>
						</span>
						<p className={delivery['delivery__item_description-status']}>
							{status == 'way' ? 'On the way' : 'delivered'}
						</p>
					</div>
					<div className={delivery['text-column']}>
						<p className={delivery['delivery__item_description-date']}>
							{date}
						</p>
						<p className={delivery['delivery__item_description-price']}>
							{prise}
							{currency == 'ton' ? <Icon src={T} img={true} /> : ''}
						</p>
					</div>
				</div>
			</div>
			{open ? <DeliveryDetails /> : <></>}
		</div>
	);
}
