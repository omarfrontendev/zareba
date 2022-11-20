import React, { useEffect, useRef, useState } from 'react'
import styles from './.module.scss'

const Header = () => {

  const [headerFixed, setHeadeFixed] = useState(false);
  const header = useRef(null); 

  useEffect(() => {
    const scrollPosition = () => {
      if(window.pageYOffset > +header.current.clientHeight) {
        setHeadeFixed(true);
        // document.body.style.paddingTop = +header.current.clientHeight + 'px'
      }else {
        setHeadeFixed(false);
        // document.body.style.paddingTop = 0 + 'px'
      }
    };

    window.addEventListener('scroll', scrollPosition);

    return () => window.removeEventListener('scroll', scrollPosition);
  }, []);

  const links = [
    {
      id: 1,
      label: 'الرئيسية',
    },
    {
      id: 2,
      label: 'عن زريبة',
    },
    {
      id: 3,
      label: 'الخدمات',
    },
    {
      id: 4,
      label: 'الأخبار',
    },
    {
      id: 5,
      label: 'تواصل معنا',
    },
  ];

  return (
    <header className={`${styles.header} ${headerFixed ? styles.header__fixed : ''}`} ref={header}>
      <div className='container'>
        <div className={styles.header__content}>
          <div className={styles.logo}>
            <a href="/">
              <img src="/assets/Logo.svg" alt="" />
            </a>
          </div>
          <ul className={styles.links}>
            {links.map((link, i) => (
              <li key={link.id}>
                <a className={`${styles.link} ${i === 0 ? styles.active : ''}`}  href="#">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header