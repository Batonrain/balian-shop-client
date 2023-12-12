import React from 'react';
import styles from './header.module.scss';
import Logo from '@img/logo.svg';
import { useTelegram } from '@hooks/useTelegram';
import { useEffect } from 'react';
import Icon from '@components/Icon';

export default function Header() {

  const { tg, user } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg])

  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo" />
      <h1 className={styles.header__text}>BALIAN</h1>
      <div className={styles.header__language}>
        <Icon icon="chevron-down" />
      </div>
      <div className={styles.header__img}>
        <img src={user?.photo_url} alt="Profile" />
      </div>
    </header>
  )
}
