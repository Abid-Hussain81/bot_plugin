export default function Hero({ styles }) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>AI for chat</p>
        <h1 className={styles.heroTitle}>
          AI for WordPress
          <br />&amp; WooCommerce
        </h1>
        <p className={styles.heroText}>
          Drive sales, deflect tickets, and answer questions instantly.
          AISK.Chat keeps customers happy across every channel.
        </p>
        <div className={styles.heroActions}>
          <button className={styles.primaryButton}>Contact Us Now</button>
          <button className={styles.ghostButton}>Watch Demo</button>
        </div>
      </div>
      <div className={styles.heroVisual}>
        <div className={styles.heroCardBack} />
        <div className={styles.heroCardMain} />
        <div className={styles.heroCardMini} />
      </div>
    </section>
  );
}
