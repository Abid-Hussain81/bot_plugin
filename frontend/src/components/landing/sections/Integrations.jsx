export default function Integrations({ styles, items }) {
  return (
    <section id="integrations" className={styles.integrations}>
      <div className={styles.sectionHeaderCenter}>
        <h2 className={styles.sectionTitle}>
          Meet your customers where they are
        </h2>
        <p className={styles.sectionSubtitle}>
          WhatsApp and Telegram integrations designed for ecommerce growth.
        </p>
      </div>
      <div className={styles.integrationGrid}>
        {items.map((item) => (
          <article key={item.title} className={styles.integrationCard}>
            <div className={styles.integrationTop}>
              <div className={styles.integrationBadge}>
                <span>W</span>
              </div>
              <div
                className={`${styles.integrationAccent} ${
                  styles[item.accent]
                }`}
              />
            </div>
            <div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardBody}>{item.body}</p>
              <button className={styles.secondaryButton}>{item.cta}</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
