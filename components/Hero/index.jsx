import React from 'react'
import styles from './.module.scss'
import { BsApple } from 'react-icons/bs'
import { FaGooglePlay } from 'react-icons/fa'
import { SiHuawei } from 'react-icons/si'  

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.title}>زريبة! بقرتك معانا...!</h1>
            <p className={styles.desc}>معانا هتلاقى اسهل طريقة تشترى او تبيع بقرتك. <br/>الطريقة بسيطة    عشان تعرفها اضغط <a className={styles.button} href='#'>هنا</a></p>
            <button className={styles.main__button}>حمل ابلكيشن زريبة</button>
            <div className={styles.available}>
              <p>متاح على</p>
              <ul>
                <li>
                  <a href='#' target='_blank'><BsApple /></a>
                </li>
                <li>
                  <a href='#' target='_blank'><FaGooglePlay /></a>
                </li>
                <li>
                  <a href="#" target='_blank'><SiHuawei /></a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.hero__image}>
            <img src='https://halan.com/wp-content/uploads/2022/07/halan-step-3-ar.png' alt='image' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero