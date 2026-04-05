"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "../landing.module.css";

const navItems = [
  { label: "Product", href: "/#features" },
  { label: "Features", href: "/#integrations" },
  { label: "How it works", href: "/#steps" },
  { label: "FAQ", href: "/#faq" },
];

export default function Header() {
  const [active, setActive] = useState("/#features");

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        {/* Logo */}
        <Link href="/" className={styles.brand}>
          <span className={styles.brandBadge}>A</span>
          <span className={styles.brandName}>AISK.Chat</span>
        </Link>

        {/* Pill Nav */}
        <nav className={styles.nav}>
          {navItems.map(({ label, href }) => {
            const isActive = active === href;
            return (
              <div
                key={href}
                className={`${styles.navItem} ${isActive ? styles.navItemActive : ""}`}
                onClick={() => setActive(href)}
              >
                <a
                  href={href}
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                >
                  {isActive ? (
                    <span className={styles.navActiveRing}>
                      <span className={styles.navActiveInner}>
                        {label}
                      </span>
                    </span>
                  ) : (
                    label
                  )}
                </a>
              </div>
            );
          })}
        </nav>

        {/* CTA Button */}
        <Link href="/plans" className={styles.primaryButton}>
          View Plans
        </Link>
      </div>
    </header>
  );
}
