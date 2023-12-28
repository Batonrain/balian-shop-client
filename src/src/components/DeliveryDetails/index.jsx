import React from 'react';
import detail from './deliveryDetails.module.scss';

export default function DeliveryDetails({ product = '' }) {
	return (
		<div className={detail.detail}>
			<div className={detail.detail__product}>
				<p className={detail['detail__product-name']}>
					<strong>1</strong>pt&nbsp; SANDALWOOD&nbsp;
					<strong>10</strong>ml
				</p>
				<p className={detail['detail__product-name']}>
					<strong>2</strong>pt&nbsp; Geranium&nbsp;
					<strong>20</strong>ml
				</p>
			</div>
			<div className={detail.detail__status}>
				<div className={detail['detail__status-item']}>
					<p className={detail['detail__status-text']}>Decorated</p>
				</div>
				<div className={detail['detail__status-item']}>
					<p className={detail['detail__status-text']}>On the package</p>
				</div>
				<div className={detail['detail__status-item']}>
					<p className={detail['detail__status-text']}>Sent</p>
				</div>
				<div className={detail['detail__status-item']}>
					<p className={detail['detail__status-text']}>
						On the way to your city
					</p>
				</div>
				<div className={detail['detail__status-item']  + ' ' + detail['passed']}>
					<p className={detail['detail__status-text'] + ' ' + detail['passed']}>
						At the point of issue
					</p>
				</div>
				<div className={detail['detail__status-item']  + ' ' + detail['passed']}>
					<p className={detail['detail__status-text'] + ' ' + detail['passed']}>
						Already at the point of issue
					</p>
				</div>
			</div>
		</div>
	);
}
