/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <p>
          Copyright &copy; 2023 
          <span className={styles.img}>
            <img src="/logo.png" alt="logo" />
          </span>
          All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
