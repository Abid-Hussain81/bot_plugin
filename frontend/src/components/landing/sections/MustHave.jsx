export default function MustHave({ styles }) {
  return (
    <section className={styles.mustHave}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          Must-have features for an AI chatbot
        </h2>
        <p className={styles.sectionSubtitle}>
          AISK has everything you need to launch fast and grow confidently.
        </p>
      </div>
      <div className={styles.mustHaveGrid}>
        <article className={styles.simpleCard}>
          <div className={styles.cardImageOne} />
          <h3 className={styles.cardTitle}>Product-aware recommendations</h3>
          <p className={styles.cardBody}>
            Match questions to the right products and bundles.
          </p>
        </article>
        <article className={styles.simpleCard}>
          <div className={styles.cardImageTwo} />
          <h3 className={styles.cardTitle}>Analytics that guide actions</h3>
          <p className={styles.cardBody}>
            See top queries, deflection rates, and best performers.
          </p>
        </article>
        <article className={styles.simpleCard}>
          <div className={styles.cardImageThree} />
          <h3 className={styles.cardTitle}>Human handoff workflows</h3>
          <p className={styles.cardBody}>
            Escalate to agents whenever customers need help.
          </p>
        </article>
      </div>
    </section>
  );
}
