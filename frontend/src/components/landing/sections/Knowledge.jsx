export default function Knowledge({ styles, points }) {
  return (
    <section className={styles.knowledge}>
      <div className={styles.knowledgeGrid}>
        <div className={styles.knowledgeImage} />
        <div>
          <h2 className={styles.sectionTitle}>
            Unlimited knowledge sources for smarter AI responses
          </h2>
          <p className={styles.sectionSubtitle}>
            Import everything your customers ask about. AISK.Chat understands
            your catalog, policies, and support content instantly.
          </p>
          <ul className={styles.knowledgeList}>
            {points.map((point) => (
              <li key={point} className={styles.knowledgeItem}>
                <span className={styles.bullet} />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
