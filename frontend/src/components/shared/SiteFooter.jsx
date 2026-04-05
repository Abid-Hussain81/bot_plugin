import Link from "next/link";
import styles from "./site-footer.module.css";

const policyLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund Policy", href: "/refund" },
];

const productLinks = [
  { label: "Plans", href: "/plans" },
  { label: "Checkout", href: "/checkout" },
  { label: "Support", href: "/#faq" },
];

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <div className={styles.brand}>
            <span className={styles.brandBadge}>A</span>
            <span>AISK.Chat</span>
          </div>
          <p className={styles.tagline}>
            A WhatsApp-first ecommerce operating system for small businesses.
          </p>
        </div>

        <div className={styles.linkGroup}>
          <span className={styles.linkTitle}>Product</span>
          {productLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.linkGroup}>
          <span className={styles.linkTitle}>Policies</span>
          {policyLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.bottomRow}>
        <span>© 2026 AISK Chat. All rights reserved.</span>
        <span>Built for WooCommerce teams worldwide.</span>
      </div>
    </footer>
  );
}
