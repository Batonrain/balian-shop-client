import React from 'react';
import styles from './header.module.scss';
import Logo from '@img/logo.svg';
import { useTelegram } from '@hooks/useTelegram';
import { useEffect, useState } from 'react';
import Icon from '@components/Icon';
import getUserPhoto from '@api/user';
import { Link } from 'react-router-dom';

export default function Header({ profile=false }) {

  const { tg, user } = useTelegram();
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    tg.ready();
    
    getUserPhoto('863966')
      .then((response) => setPhoto(response.data.photo))
      .catch(e => console.log(e.toJSON()))
  }, [])

  // console.log(photo)

  return (
    <header className={styles.header}>
      <Link to={'/'} className={styles.header__link}>
        <img src={Logo} alt="Logo" />
        <h1 className={styles.header__text}>BALIAN</h1>
      </Link>
      <div className={styles.header__language}>
        <Icon icon="chevron-down" />
      </div>
      {
        profile ? 
        <></>
        :
        <div className={styles.header__img}>
          <img src={`data:image/png;base64,${photo}`} alt="Profile" />
        </div> 
      }
    </header>
  )
}
