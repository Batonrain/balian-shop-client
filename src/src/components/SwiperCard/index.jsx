import React from 'react'
import PropTypes from 'prop-types'
import styles from './SwiperCard.module.scss'
import Icon from '@components/Icon';
import ButtonGroup from '@components/ButtonGroup';

const SwiperCard = ({imgBg = "", imgFlask = ""}) => {
    
    const btnSwiper = [
        {
            className: styles.swiper__button,
            content: <Icon icon="fa-arrow-left" />
        },
        {
            className: styles.swiper__button,
            content: <Icon icon="fa-arrow-right" />
        },
    ]

    return (
    <div className={styles.swiper}>
        <div className={styles.swiper__bg}>
            <img src={imgBg} alt="bg"/>
        </div>
        <div className={styles.swiper__foreground}>
            <div className={styles.swiper__flask}>
                <img src={imgFlask} alt="flask" />
            </div>
            <div className={styles.swiper__group_btn}>
                <ButtonGroup buttons={btnSwiper} />
            </div>
        </div>
    </div>
  )
}

SwiperCard.propTypes = {
    imgBg: PropTypes.string,
    imgFlask: PropTypes.string,
}

export default SwiperCard