export default function Footer({ styles }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerBrand}>
          <span className={styles.footerBadge}>A</span>
          AISK.Chat
        </div>
        <div>© 2026 AISK Chat. All rights reserved.</div>
      </div>
    </footer>
  );
}
