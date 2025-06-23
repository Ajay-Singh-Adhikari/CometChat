import React from "react";
import style from "./Page4.module.css";
import Page4Footer from './Page4Footer.jsx';

export default function Page4() {
  return (
    <div className={style.page4Wrapper}>
      <div className={style.ctaSection}>
        <h2 className={style.ctaTitle}>Get started for free</h2>
        <p className={style.ctaSub}>
          Build and test for as long as you need.
          <br />
          Pick a plan when you&apos;re ready.
        </p>
        <div className={style.ctaButtons}>
          <button className={style.btnPrimary}>Start free trial</button>
          <button className={style.btnOutline}>Schedule a demo</button>
        </div>
      </div>

      <Page4Footer />
    </div>
  );
}
