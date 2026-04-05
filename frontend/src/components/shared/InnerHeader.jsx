import Link from "next/link";
import styles from "./inner-header.module.css";

const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "plans", label: "Plans", href: "/plans" },
  { id: "checkout", label: "Checkout", href: "/checkout" },
];

export default function InnerHeader({
  active = "plans",
  ctaLabel = "Start Trial",
  ctaHref = "/checkout",
}) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandBadge}>A</span>
          <span className={styles.brandText}>AISK.Chat</span>
        </Link>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={
                item.id === active ? styles.navLinkActive : styles.navLink
              }
              aria-current={item.id === active ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href={ctaHref} className={styles.cta}>
          {ctaLabel}
        </Link>
      </div>
    </header>
  );
}
