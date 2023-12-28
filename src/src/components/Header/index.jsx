import React, { useEffect, useState } from 'react';
import styles from './header.module.scss';
import Logo from '@img/logo.svg';
import { useTelegram } from '@hooks/useTelegram';
import Icon from '@components/Icon';
import Button from '@components/Button';
import getUserPhoto from '@api/user';
import { Link, useLocation } from 'react-router-dom';
import Eng from '@img/en.svg';
import Rus from '@img/ru.svg';

export default function Header({ profile = false }) {
	const { tg, user } = useTelegram();
	const [photo, setPhoto] = useState('');
	const [open, setOpen] = useState(false);
	const location = useLocation();

	useEffect(() => {
		tg.ready();

		getUserPhoto('863966')
			.then((response) => setPhoto(response.data.photo))
			.catch((e) => console.log(e.toJSON()));
	}, []);

	return (
		<header className={styles.header}>
			<Link to={'/'} className={styles.header__link}>
				<img src={Logo} alt="Logo" />
				<h1 className={styles.header__text}>BALIAN</h1>
			</Link>
			<div className={styles.header__language}>
				<div className={styles['header__language-current']}>
					<Icon src={Eng} img="true" />
					<p>EN / Rp</p>
				</div>
				<Button
					content={<Icon icon="chevron-down" />}
					className={open ? styles['active'] : ''}
					onClick={() => setOpen((prev) => !prev)}
				/>
				{open ? (
					<div
						class={
							styles['header__language_choice'] +
							` ${location.pathname == '/profile' ? styles['choice-profile'] : ''}`
						}
					>
						<div className={styles['header__language_choice-item']}>
							<div className={styles['btn'] + ' ' + styles['btn-language']}>
								<Button content={[<Icon src={Rus} img="true" />, 'RUS']} />
							</div>
							<div className={styles['btn'] + ' ' + styles['btn-currency']}>
								<Button content={'₽'} />
							</div>
						</div>
						<div className={styles['header__language_choice-item']}>
							<div className={styles['btn'] + ' ' + styles['btn-language']}>
								<Button content={[<Icon src={Rus} img="true" />, 'RUS']} />
							</div>
							<div className={styles['btn'] + ' ' + styles['btn-currency']}>
								<Button content={'₽'} />
							</div>
						</div>
					</div>
				) : (
					<></>
				)}
			</div>
			{profile ? (
				<></>
			) : (
				<>
					{location.pathname != '/profile' ? (
						<div className={styles.header__img}>
							<img src={`data:image/png;base64,${photo}`} alt="Profile" />
						</div>
					) : (
						<></>
					)}
				</>
			)}
		</header>
	);
}
