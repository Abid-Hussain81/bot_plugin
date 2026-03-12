export default function Header({ styles }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <span className={styles.brandBadge}>A</span>
          AISK.Chat
        </div>
        <nav className={styles.nav}>
          <a className={styles.navLink} href="#features">
            Product
          </a>
          <a className={styles.navLink} href="#integrations">
            Features
          </a>
          <a className={styles.navLink} href="#steps">
            How it works
          </a>
          <a className={styles.navLink} href="#faq">
            FAQ
          </a>
        </nav>
        <button className={styles.primaryButton}>Contact Us Now</button>
      </div>
    </header>
  );
}
