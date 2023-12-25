import React from 'react';
import filters from './filters.module.scss';
import Button from '@components/Button';
import FiltersCard from '@components/FiltersCard';

export default function Filters({ closeFilter = () => {} }) {
	const inputSort = [
		{
			type: 'radio',
			label: 'Popular',
			name: 'sorting',
		},
		{
			type: 'radio',
			label: 'Cheaper at first',
			name: 'sorting',
		},
		{
			type: 'radio',
			label: 'More expensive at first ',
			name: 'sorting',
		},
		{
			type: 'radio',
			label: 'New products',
			name: 'sorting',
		},
	];

	const inputPrice = [
		{
			type: 'range',
		},
	];

	const inputCategories = [
		{
			type: 'checkbox',
			label: 'Organic',
			count: 25,
			className: filters['filters__label-count'],
		},
		{
			type: 'checkbox',
			label: 'Inorganic',
			count: 10,
			className: filters['filters__label-count'],
		},
		{
			type: 'checkbox',
			label: 'Other',
			count: 33,
			className: filters['filters__label-count'],
		},
		{
			type: 'checkbox',
			label: 'Other',
			count: 11,
			className: filters['filters__label-count'],
		},
		{
			type: 'checkbox',
			label: 'Other',
			count: 12,
			className: filters['filters__label-count'],
		},
	];

	return (
		<div className={filters.filters}>
			<div className={filters.filters__btn}>
				<Button
					content="CLOSE"
					className={filters['filters__btn-close']}
					onClick={closeFilter}
				/>
				<p className={filters.filters__title}>Filters</p>
				<Button content="RESET" className={filters['filters__btn-reset']} />
			</div>
			<div className={filters.filters__group}>
				<FiltersCard nameGroup="price" input={inputPrice} />
				<FiltersCard nameGroup="sorting" input={inputSort} />
				<FiltersCard nameGroup="categories" input={inputCategories} />
				<FiltersCard nameGroup="categories" input={inputCategories} />
			</div>
			<div className={filters.filters__apply}>
				<Button content="APPLY" />
			</div>
		</div>
	);
}
