import React from 'react'
import SwiperCard from '@components/SwiperCard';
import Footer from '@components/Footer';
import Bg1 from '@img/bg1.jpg'
import Flask1 from '@img/flask 1.png'
import Search from '@components/Search';
import CardMainList from '@pages/CardMainList';

export default function MainPage() {
  return (
    <>
        <SwiperCard imgBg={Bg1} imgFlask={Flask1} />
        <Search />
        <CardMainList />
        <Footer />
    </>
  )
}
