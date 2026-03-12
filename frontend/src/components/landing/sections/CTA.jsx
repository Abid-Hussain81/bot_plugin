export default function CTA({ styles }) {
  return (
    <section className={styles.cta}>
      <h2 className={styles.ctaTitle}>Try AISK for free</h2>
      <p className={styles.ctaText}>
        Start today and convert more chats into customers.
      </p>
      <button className={styles.ctaButton}>Get Started</button>
    </section>
  );
}
