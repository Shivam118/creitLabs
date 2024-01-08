import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../assets/styles/navbar.module.css";

const Navbar = () => {
  return (
    <navbar className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Image
          src="../assets/images/creItLabs.svg"
          alt="CreIt Logo"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.navbarLinks}>
        <ul className={styles.navbarItems}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
        <div className={styles.navbarCallBtn}>Schedule a Call</div>
      </div>
    </navbar>
  );
};

export default Navbar;
