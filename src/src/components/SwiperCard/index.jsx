import React from 'react';
import PropTypes from 'prop-types';
import styles from './SwiperCard.module.scss';
import Icon from '@components/Icon';
import ButtonGroup from '@components/ButtonGroup';

const SwiperCard = ({
	imgBg = '',
	classBg = '',
	imgFlask = '',
	classFlask = '',
	classContainer = '',
	slogan = '',
	OnClickLeft = () => {},
	prevClass = '',
	nextClass = '',
	btn = true,
	customBtnSwiper = [],
	classBtnGroup = '',
}) => {
	const btnSwiper = [
		{
			className: styles.swiper__button + ' ' + prevClass,
			content: <Icon icon="fa-arrow-left" />,
			onClick: OnClickLeft,
		},
		{
			className: styles.swiper__button + ' ' + nextClass,
			content: <Icon icon="fa-arrow-right" />,
		},
	];

	return (
		<div className={styles.swiper + ' ' + classContainer}>
			{slogan ? (
				<div className={styles.swiper__slogan}>
					<span className={styles.swiper__slogan_container}>
						<span className={styles.swiper__slogan_text}>{slogan}</span>
					</span>
				</div>
			) : (
				''
			)}
			<div className={styles.swiper__bg + ' ' + classBg}>
				<img src={imgBg} alt="bg" />
			</div>
			<div className={styles.swiper__foreground}>
				<div className={styles.swiper__flask + ' ' + classFlask}>
					<img src={imgFlask} alt="flask" />
				</div>
				{btn ? (
					<div className={classBtnGroup ? classBtnGroup : styles.swiper__group_btn}>
						<ButtonGroup
							buttons={
								customBtnSwiper.length != 0 ? customBtnSwiper : btnSwiper
							}
						/>
					</div>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

SwiperCard.propTypes = {
	imgBg: PropTypes.string,
	classBg: PropTypes.string,
	imgFlask: PropTypes.string,
	classFlask: PropTypes.string,
	classContainer: PropTypes.string,
	slogan: PropTypes.string,
	OnClickLeft: PropTypes.func,
	prevClass: PropTypes.string,
	nextClass: PropTypes.string,
	btn: PropTypes.bool,
	customBtnSwiper: PropTypes.array,
	classBtnGroup: PropTypes.string,
};

export default SwiperCard;
