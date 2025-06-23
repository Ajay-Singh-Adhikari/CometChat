import React from "react";
import styles from './Page4Footer.module.css';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const footerData = [
  {
    title: "Platform",
    links: [
      "Features", "Chat & Messaging", "Voice & Video Calls", "Security & Compliance",
      "Extensions", "Features at a glance", "Webhooks & Bots", "Moderation", "Analytics & Insights",
      "Implementation", "Widgets", "UI Kits", "SDKs & APIs",
      "Technologies", "React Chat SDK & API", "Angular Chat SDK & API", "Vue Chat SDK & API",
      "IOS Swift Chat SDK & API", "Android Kotlin Chat SDK & API", "Android Java Chat SDK & API",
      "React Native Chat SDK & API", "Ionic/Capacitor Chat SDK & API", "WordPress Chat SDK & API",
      "Laravel/PHP Chat SDK & API", "Flutter Chat SDK & API", "Next.js Chat SDK & API"
    ]
  },
  {
    title: "Solutions",
    links: [
      "By Use cases", "Social Community", "Marketplace", "Healthcare", "Education", "Virtual Events",
      "On-Demand Service", "Dating Apps", "Gaming", "By Organization Type", "Enterprise", "Startups"
    ]
  },
  {
    title: "Developers",
    links: [
      "Technologies documentation", "React", "Angular", "Vue", "IOS Swift", "Android Kotlin", "Android Java",
      "React Native", "Ionic/Capacitor", "WordPress", "Laravel/PHP", "Flutter", "Next.js", "Documentation",
      "Product updates", "Tutorials", "Open-source Apps", "Product status", "Glossary"
    ]
  }
];

const resourcesGroup = [
  {
    title: "Resources",
    links: ["Customer stories", "Blog", "Give feedback", "Community forum", "Help center", "Partners"]
  },
  {
    title: "Competitors",
    links: ["SendBird", "GetStream", "Applozic", "Twilio", "PubNub"]
  },
  {
    title: "Company",
    links: ["About us", "Careers", "Partners", "Pricing", "Chat with us"]
  }
];

const subHeadings = [
  "features", "implementation", "technologies",
  "by use cases", "by organization type",
  "technologies documentation", "documentation"
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="footer-main">
        <div className={styles.footerLogo}>cometchat</div>
        <div className={styles.footerColumns}>

          {footerData.map((section, idx) => (
            <div key={idx} className={styles.footerColumn}>
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link, i) => {
                  const isSubheading = subHeadings.includes(link.toLowerCase());
                  return (
                    <li
                      key={i}
                      className={isSubheading ? styles.subheadingItem : ""}
                    >
                      {link}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          <div className={`${styles.footerColumn} ${styles.flexColumn}`}>
            {resourcesGroup.map((group, idx) => (
              <div key={idx} className={styles.subSection}>
                <h4>{group.title}</h4>
                <ul>
                  {group.links.map((link, i) => (
                    <li key={i}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerLegal}>
          <span>2025 © CometChat</span>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className={styles.footerSocial}>
          <a href="https://www.facebook.com"><FaFacebookF /> Facebook</a>
          <a href="https://www.linkedIn.com"><FaLinkedinIn /> LinkedIn</a>
          <a href="https://www.instagram.com"><FaInstagram /> Instagram</a>
          <a href="https://www.twitter.com"><FaTwitter /> Twitter</a>
          <a href="https://www.github.com"><FaGithub /> GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
