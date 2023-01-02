import React from "react";
import Image from "next/image";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutInfo}>
          <h2 className={styles.aboutHeading}>About Us</h2>
          <div className={styles.aboutImage}>
            <Image
              className={styles.image}
              src="/about.jpg"
              alt="Tech trends"
              width={1000}
              height={600}
            />
          </div>
          <p className={styles.aboutPara}>
            Welcome to our tech trends blog! We are a team of IT professionals
            and enthusiasts who are passionate about staying up-to-date with the
            latest technologies and trends in the field.
          </p>
          <p className={styles.aboutPara}>
            On our blog, you will find in-depth articles, news, and analysis of
            the most innovative and impactful technologies that are shaping the
            future of IT. From cloud computing and artificial intelligence to
            cybersecurity and the Internet of Things, we cover a wide range of
            topics to keep you informed and ahead of the curve.
          </p>
          <p className={styles.aboutPara}>
            Our goal is to provide valuable insights and practical advice to
            help you understand the impact and potential of emerging
            technologies, and how they can be leveraged to drive business growth
            and innovation.
          </p>
          <p className={styles.aboutPara}>
            We also offer expert opinions and thought leadership from industry
            leaders and innovators, as well as hands-on tutorials and resources
            to help you learn and master the latest technologies.
          </p>
          <p className={styles.aboutPara}>
            Thank you for choosing our tech trends blog as your go-to source for
            staying up-to-date with the latest technologies in IT. We hope you
            find our content informative and useful, and we welcome your
            feedback and suggestions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
