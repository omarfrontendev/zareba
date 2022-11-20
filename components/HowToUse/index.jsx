import React, { useState } from 'react'
import { Stepone } from '../icons'
import styles from './.module.scss'

const HowToUse = () => {

  const [currentActive, setCurrentActive] = useState(1);
  const [position, setPoisition] = useState(null);

  const steps = [
    {
      id: 1,
      icon: <Stepone />,
      title: 'نزل أبلكيشن زريبة',
      desc: 'لتحميل أبليكيشن زريبة ادخل على جوجل بلاي ستور، أبل أب ستور.'
    },
    {
      id: 2,
      icon: <Stepone />,
      title: 'تسجيل وإنشاء حساب',
      desc: 'قم بفتح أبلكيشن زريبة واتبع الخطوات لتسجيل حساب جديد.'
    },
    {
      id: 3,
      icon: <Stepone />,
      title: 'اكتشف خدماتنا',
      desc: 'اختار من خدمات التمويل، التقسيط أو المدفوعات'
    }
  ];

  return (
    <section className={`${styles.section} section__space`}>
      <div className="container">
        <h2 className={`${styles.section__title} section__title`}>ازاي تستخدم زريبة</h2>
        <p className={styles.section__subtitle}>في خطوات سهلة وبسيطة تقدر تخلص كل امورك المادية</p>
        <div className={styles.section__content}>
          <div className={styles.steps}>
            {steps.map(step => (
              <div 
                onClick={() => setCurrentActive(step.id)}
                onMouseMove={e => setPoisition({
                  x: e.clientX,
                  y: e.clientY
                })}
                className={`${styles.signle__step} ${currentActive === step.id ? styles.active : ""}`} key={step.id}
              >
                <div className={styles.setp__icon}
                >
                  {step.icon}
                </div>
                <div className={styles.step__details}>
                  <h4 className={styles.step__title}>{step.title}</h4>
                  <p className={styles.step__desc}>{step.desc}</p>
                </div>
                {+currentActive === +step.id && <span style={{left: position?.x, top: position?.y}} className={`${styles.cursor}`}></span>}
              </div>
            ))}
            <div className={styles.images}>
                <img src="https://halan.com/wp-content/uploads/2022/09/ar-appstore-dark.svg" alt="" />
                <img src="https://halan.com/wp-content/uploads/2022/09/ar-gplay-dark.svg" alt="" />
                <img src="https://halan.com/wp-content/uploads/2022/09/ar-appgallery-dark.svg" alt="" />
            </div>
          </div>
          <div className={styles.step__image}
          >
            <img 
              className={styles.image} 
              src='https://halan.com/wp-content/uploads/2022/07/halan-step-3-ar.png' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToUse