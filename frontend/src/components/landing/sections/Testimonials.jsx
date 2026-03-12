export default function Testimonials({ styles, items }) {
  return (
    <section className={styles.testimonials}>
      <div className={styles.sectionHeaderCenter}>
        <h2 className={styles.sectionTitle}>
          Don’t just take our words. Hear what our users say.
        </h2>
        <p className={styles.sectionSubtitle}>
          Real results from teams across ecommerce and retail.
        </p>
      </div>
      <div className={styles.testimonialGrid}>
        {items.map((card) => (
          <article key={card.name} className={styles.simpleCard}>
            <div className={styles.ratingRow}>
              <div className={styles.stars}>★★★★★</div>
              <span className={styles.ratingText}>5.0</span>
            </div>
            <p className={styles.cardBody}>{card.body}</p>
            <div className={styles.testimonialName}>{card.name}</div>
            <div className={styles.testimonialRole}>{card.role}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
