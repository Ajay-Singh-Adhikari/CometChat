import React, { useState } from "react";
import styles from "./Page1Hero.module.css";
import { FaMicrosoft } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Page1Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className={styles.mainBody}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <span>comet</span>
          <strong>chat</strong>
        </div>

        <div
          className={styles.hamburger}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </div>

        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.show : ""}`}>
          <a href="#">Platform</a>
          <a href="#">Solutions</a>
          <a href="#">Developers</a>
          <a href="#">Resources</a>
          <a href="#">Pricing</a>
          <div className={styles.mobileActions}>
            <button className={styles.text}>Log in</button>
            <button className={styles.schedule}>Schedule a demo</button>
          </div>
        </nav>

        <div className={styles.actions}>
          <button className={styles.text}>Log in</button>
          <button className={styles.schedule}>Schedule a demo</button>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.bgEffect}>
          <div className={`${styles.bgCircle} ${styles.circlePurple}`}></div>
          <div className={`${styles.bgCircle} ${styles.circleOrange}`}></div>
          <div className={`${styles.bgCircle} ${styles.circleIndigo}`}></div>
        </div>

        <div className={styles.heroText}>
          <h1>
            Join the CometChat
            <br /> partner universe
          </h1>
          <p>
            Create value for your clients, leveraging our world-class
            technology. Partner with us and grow your business!
          </p>
        </div>

        <div className={styles.formBox}>
          <h2>Become a partner</h2>
          <form>
            <div>
              <p>Full name</p>
              <input type="text" placeholder="Type your name here..." />
            </div>
            <div>
              <p>Email Address</p>
              <input type="email" placeholder="Type your emailsomething..." />
            </div>
            <div>
              <p>Companies Name</p>
              <input type="text" placeholder="Type your company’s name" />
            </div>
            <button type="submit">Submit application</button>
          </form>
        </div>
      </section>

      <div className={styles.partners}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
          alt="AWS"
        />
        <span>10X GENOMICS</span>
        <span>
          <FaMicrosoft /> Microsoft
        </span>
        <span>NASSCOM®</span>
        <span>techstars_</span>
        <span>tekno point</span>
        <span>CISCO.</span>
        <span>Trinax</span>
        <span>haptik</span>
      </div>
    </section>
  );
};

export default Page1Hero;



