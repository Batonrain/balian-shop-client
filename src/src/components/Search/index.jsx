import React from 'react'
import sr from './search.module.scss';
import Input from '@components/Input';
import ButtonGroup from '@components/ButtonGroup';
import Icon from '@components/Icon';
import Filter from '@img/filter.svg';

export default function Search({openFilter = () => {}}) {
    const btn = [
        {
            content: <Icon icon="fa-solid fa-magnifying-glass" />
        },
        {
            content: <img src={Filter} alt="filter" />,
            onClick: openFilter
        }
    ]

  return (
    <div className={sr.search}>
        <div className={sr.search__container}>
            <Input className={sr.search__input} type="text" placeholder="TYPE SOMETHING HERE..." />
            <div className={sr.search__btn}>
                <ButtonGroup buttons={btn} />
            </div>
        </div>
    </div>
  )
}
