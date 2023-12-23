import React from 'react';
import Input from '@components/Input';
import filtersCard from './filtersCard.module.scss';

export default function FiltersCard({ nameGroup = '', input = [] }) {
	return (
		<div className={filtersCard.filtersCard}>
			<div className={filtersCard.filtersCard__name}>{nameGroup}</div>
			<div className={filtersCard.filtersCard__input}>
				{input.length > 0 ? (
					input.map((item, index) => {
						return (
							<div className={filtersCard['filtersCard__input-item']}>
								<Input
									key={index}
									type={item.type}
									label={item.label}
                                    count={item.count}
									name={item.name}
                                    placeholder={item.placeholder}
                                    classLabel={item.className}
								/>
							</div>
						);
					})
				) : (
					<></>
				)}
			</div>
		</div>
	);
}
