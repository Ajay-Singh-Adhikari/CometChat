import React from 'react';
import {
  FaRocket,
  FaDollarSign,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaClock,
  FaUsers,
  FaBookOpen,
  FaHeadset,
  FaMoneyBillWave
} from 'react-icons/fa';
import style from './Page2.module.css';

const items = [
  { icon: <FaRocket />, title: 'Free credits', desc: 'Empowering partners to scale.' },
  { icon: <FaDollarSign />, title: 'Revenue share', desc: 'Get monthly recurring revenues when you refer clients.' },
  { icon: <FaChalkboardTeacher />, title: 'Training and mentoring sessions', desc: 'Enabling partners to deliver the best experience.' },
  { icon: <FaLaptopCode />, title: 'Special developer access', desc: 'Get an all-access account to build unlimited PoCs for your clients.' },
  { icon: <FaClock />, title: 'Reduced time', desc: 'Deliver your products much faster with our partners’ programs.' },
  { icon: <FaUsers />, title: 'Value addition to your users', desc: 'We need a 2 line text here' },
  { icon: <FaBookOpen />, title: 'Knowledge sessions', desc: 'Access to product and market sessions.' },
  { icon: <FaHeadset />, title: 'On-demand support', desc: 'Technical assistance for implementation.' },
  { icon: <FaMoneyBillWave />, title: 'Significant passive income', desc: 'We need a 2 line text here' },
];

export default function Page2() {
  return (
    <div className={style.page2Wrapper}>
      <div className={style.page2Header}>
        <p className="text-warning mb-1 small">Be a partner</p>
        <h1 className="text-white">CometChat partner<br />advantages</h1>
      </div>
      <div className="row g-3 pt-3 justify-content-center">
        {items.map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
            <div className={style.page2Card}>
              <div className={style.icon}>{item.icon}</div>
              <div className={style.cardTitle}>{item.title}</div>
              <p className={style.cardDesc}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
