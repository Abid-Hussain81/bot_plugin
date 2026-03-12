export default function Features({ styles, items }) {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.sectionHeaderCenter}>
        <h2 className={styles.sectionTitle}>
          Automatically answer questions, recommend products,
          <br />
          and provide support through WhatsApp &amp; Telegram
        </h2>
        <p className={styles.sectionSubtitle}>
          Everything runs on autopilot so you can focus on growth.
        </p>
      </div>
      <div className={styles.featureGrid}>
        {items.map((feature) => (
          <article key={feature.title} className={styles.featureCard}>
            <div className={styles.featureImage} />
            <h3 className={styles.cardTitle}>{feature.title}</h3>
            <p className={styles.cardBody}>{feature.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
