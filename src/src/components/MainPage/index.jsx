import React from 'react'
import Header from '@components/Header';
import SwiperCard from '@components/SwiperCard';
import Footer from '@components/Footer';
import Bg1 from '@img/bg1.jpg'
import Flask1 from '@img/flask 1.png'

export default function MainPage() {
  return (
    <>
        <Header />
        <SwiperCard imgBg={Bg1} imgFlask={Flask1} />
        <Footer />
    </>
  )
}
