import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../assets/styles/navbar.module.css";
import logo from "../assets/images/creItLabs.svg";

const Navbar = () => {
  return (
    <navbar className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Image src={logo} alt="CreIt Logo" width={50} height={50} />
        <span>CreIT Labs</span>
      </div>
      <div className={styles.navbarLinks}>
        <ul className={styles.navbarItems}>
          <li>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
              Solutions
            </Link>
          </li>
          <li>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
              Careers
            </Link>
          </li>
          <li>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
              FAQ
            </Link>
          </li>
        </ul>
        <button className={styles.navbarCallBtn}>Schedule a Call</button>
      </div>
    </navbar>
  );
};

export default Navbar;
