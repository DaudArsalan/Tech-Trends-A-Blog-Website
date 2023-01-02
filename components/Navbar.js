import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
// import 'boxicons'


const Navbar = () => {
  return (
    <div>
      <header>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Image
              className={styles.logoImage}
              src="/logo.png"
              alt="tech trends"
              width={1000}
              height={105}
            />
          </div>
          <ul className={styles.ul}>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/blog">
              <li>Blogs</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
          </ul>
          <hr className={styles.hr} />
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
