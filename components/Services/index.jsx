import React from 'react'
import styles from './.module.scss'
import { BsCheckCircleFill } from 'react-icons/bs'

const Services = () => {

  const services = [
    {
      title: 'زريبة تمويل',
      desc: 'تمويل للمشروعات الصغيرة يصل ل 200,000ج.',
      services: [
        'أسهل إجراءات',
        'بالبطاقة الشخصية والسجل التجاري',
        'بدون حساب بنكي'
      ],
      img: 'https://halan.com/wp-content/uploads/2022/06/halan-lending-ar-1.png'
    },
    {
      title: 'زريبة تمويل',
      desc: 'تمويل للمشروعات الصغيرة يصل ل 200,000ج.',
      services: [
        'أسهل إجراءات',
        'بالبطاقة الشخصية والسجل التجاري',
        'بدون حساب بنكي'
      ],
      img: 'https://halan.com/wp-content/uploads/2022/06/halan-lending-ar-1.png'
    },
    {
      title: 'زريبة تمويل',
      desc: 'تمويل للمشروعات الصغيرة يصل ل 200,000ج.',
      services: [
        'أسهل إجراءات',
        'بالبطاقة الشخصية والسجل التجاري',
        'بدون حساب بنكي'
      ],
      img: 'https://halan.com/wp-content/uploads/2022/06/halan-lending-ar-1.png'
    },
  ]

  return (
    <section className={`${styles.section} section__space`}>
      <div className="container">
        <h2 className={`${styles.section__title} section__title`}>خدمات زريبة</h2>
        <div className={styles.services__content}>
          {services.map((service, i) => (
            <div className={styles.service__box} key={i}>
              <div className={styles.service__details}>
                <div>
                  
                </div>
                <h3  className={`${styles.service__title} section__title`}>{service.title}</h3>
                <p className={styles.service__desc}>{service.desc}</p>
                <ul className={styles.list}>
                  {service.services.map((service, i) => (
                    <li className={styles.signle__line__service} key={i}>
                      <BsCheckCircleFill className={styles.check__icon} /> {service}
                    </li>
                  ))}
                </ul>
                <button className={styles.button}>اعرف اكثر</button>
              </div>
              <div>
                <img src={service.img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services