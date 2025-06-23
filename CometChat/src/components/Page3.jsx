import React, { useState } from 'react';
import { FaUserFriends, FaCode, FaRocket } from 'react-icons/fa';
import style from './Page3.module.css';

const partnershipPrograms = [
  {
    icon: <FaUserFriends />,
    title: 'Affiliate partner program',
    desc: 'Bring value to your customers with a world-class in-app messaging tool that increases user-to-user engagement and retention. Get incentivized for referring CometChat to any of your customers.'
  },
  {
    icon: <FaCode />,
    title: 'Technology partner program',
    desc: 'Development teams can use our plug and play solution to build top edge chat solutions for their clients using our SDKs and APIs. It’s simple, safe and secure.'
  },
  {
    icon: <FaRocket />,
    title: 'Start up growth program',
    desc: 'We help incubators, accelerators, co-working spaces that foster an ecosystem of start-ups. This program also enables VCs to accelerate the growth of their portfolio companies.'
  }
];

const faqs = [
  {
    question: 'This is a frequently asked question?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.'
  },
  { question: 'This is a frequently asked question?', answer: 'Phir se same question.' },
  { question: 'This is a very long question that may have more than one line?', answer: 'Website made by Ajay Singh Adhikari.' },
  { question: 'This is a frequently asked question?', answer: 'Do you like this website.' },
  { question: 'This is a question?', answer: 'By By see you soon.' }
];

export default function Page3() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggle = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className={style.page3Wrapper}>
      <div className={style.programSection}>
        <p className="text-primary small">Our programs</p>
        <h2 className="fw-bold">Types of partnerships programs</h2>
        <div className="row mt-4">
          {partnershipPrograms.map((item, index) => (
            <div key={index} className="col-md-4">
              <div className={style.cardBox}>
                <div className={style.cardIcon}>{item.icon}</div>
                <h6 className="fw-semibold">{item.title}</h6>
                <p className={style.cardDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={style.faqSection}>
        <p className="text-warning text-center small">FAQ&apos;s</p>
        <h2 className="text-center fw-bold">We want to help you<br />with all your doubts</h2>

        <div className={style.accordion}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`${style.accordionItem} ${openIndexes.includes(idx) ? style.active : ''}`}
              onClick={() => toggle(idx)}
            >
              <div className={style.question}>
                {faq.question}
                <span className={style.arrow}>{openIndexes.includes(idx) ? '▾' : '▸'}</span>
              </div>
              {openIndexes.includes(idx) && (
                <div className={style.answer}>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
