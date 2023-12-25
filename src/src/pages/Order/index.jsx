import React, { useState } from 'react';
import Input from '@components/Input';
import Button from '@components/Button';
import order from './order.module.scss';
import Select from '@components/Select';
import T from '@img/t.svg';
import Icon from '@components/Icon';
import { Link } from 'react-router-dom';

export default function Order() {
	const options = ['Delivery', 'Delivery', 'Delivery', 'Delivery'];
	const [success, setSuccess] = useState(false);

	return (
		<div className={order.order}>
			{!success ? (
				<>
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
								<b>
									Total: 185 <Icon src={T} img={true} /> 75 Rp
								</b>
							</div>
							<Input
								type="checkbox"
								label={['Use bonuses: ', <strong>14</strong>]}
								classLabel={order.order__input_label}
							/>
						</div>
						<div className={order.order__btn}>
							<Button
								content="Pay for the order"
								className={order['order__btn-success']}
								onClick={() => setSuccess(true)}
							/>
						</div>
					</div>
				</>
			) : (
				<>
					<div className={order.order__title}>
						Thank you for placing <br />
						your order
					</div>
					<div className={order.order__input}>
						<div className={order.order__price_text}>
							<strong>Number: </strong>46784 6890
						</div>
						<div className={order.order__price_text}>
							<strong>Date: </strong>21.12.23 21:30
						</div>
						<div className={order.order__price_text}>
							You can view the status of your order in your{' '}
							<strong>Personal Account</strong>.<br />
							For more details, you can contact us in the{' '}
							<strong>support chat</strong>.
						</div>
						<div className={order.order__btn}>
							<Link to={'/'}>
								<Button
									content="Go to the main page"
									className={order['order__btn-success']}
								/>
							</Link>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
