import React from 'react';
import Input from '@components/Input';
import order from './order.module.scss';
import Select from '@components/Select';
import T from '@img/t.svg';
import Icon from '@components/Icon';

export default function Order() {
	const options = ['Delivery', 'Delivery', 'Delivery', 'Delivery'];

	return (
		<div className={order.order}>
			<div className={order.order__title}>placing an order</div>
			<div className={order.order__input}>
				<Input type="text" placeholder="Full Name" />
				<Input type="text" placeholder="E-mail" />
				<Input type="text" placeholder="Delivery address" />
				<Select
					options={options}
					classOptions={order.order__select_options}
					classNameArrow={order.order__select_arrow}
					classSelect={order.order__select}
					placeholder="Delivery service"
				/>
				<div className={order.order__input_check}>
					<Input
						type="checkbox"
						label={[
							'By clicking on the checkbox, you agree to the ',
							<strong>Personal Data Processing Policy</strong>,
						]}
						classLabel={order.order__input_label}
					/>
				</div>
				<div className={order.order__price}>
					<div className={order.order__price_text}>
						Total: 185 <Icon src={T} img={true} /> 75 Rp
					</div>
					<Input
						type="checkbox"
						label={['Use bonuses: ', <strong>14</strong>]}
						classLabel={order.order__input_label}
					/>
				</div>
			</div>
		</div>
	);
}
