export default function Steps({ styles, steps }) {
  return (
    <section id="steps" className={styles.steps}>
      <div className={styles.sectionHeaderCenter}>
        <h2 className={styles.sectionTitle}>Get started with AISK in minutes</h2>
        <p className={styles.sectionSubtitle}>
          Launch quickly without waiting on developers.
        </p>
      </div>
      <div className={styles.stepsGrid}>
        {steps.map((step, index) => (
          <article key={step.title} className={styles.stepCard}>
            <div className={styles.stepIndex}>{index + 1}</div>
            <h3 className={styles.cardTitle}>{step.title}</h3>
            <p className={styles.cardBody}>{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
