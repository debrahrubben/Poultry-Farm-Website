import { Header } from './component/header.jsx';
import styles from './HeroSection.module.css';
import { Title } from './component/Title.jsx';

import React from 'react'

export const HeroSection = () => {
  return (
    <div>
   <section className={styles.hero}>
    <Header />
    <Title />
  </section></div>
  )
}



