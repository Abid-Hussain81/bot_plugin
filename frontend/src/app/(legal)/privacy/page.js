import InnerHeader from "@/components/shared/InnerHeader";
import SiteFooter from "@/components/shared/SiteFooter";
import styles from "../legal.module.css";

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <InnerHeader active="" ctaLabel="Start Free Trial" ctaHref="/plans" />
      <main className={styles.main}>
        <div>
          <p className={styles.eyebrow}>Policy</p>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.subtitle}>
            This policy explains how AISK.Chat collects, uses, and protects your
            data when you use our services.
          </p>
        </div>

        <section className={styles.section}>
          <h2>Information we collect</h2>
          <p>
            We collect account details, store metadata, and conversation
            transcripts to provide automated support and analytics. Payment
            details are processed securely by our payment partners.
          </p>
        </section>

        <section className={styles.section}>
          <h2>How we use data</h2>
          <p>
            Data is used to power AI responses, improve product performance,
            provide customer support, and keep your store running smoothly.
          </p>
          <ul>
            <li>Train responses on your approved knowledge sources.</li>
            <li>Measure performance and conversion insights.</li>
            <li>Send product updates and security notifications.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Your rights</h2>
          <p>
            You can request data exports or deletion at any time. We comply with
            applicable data protection regulations for all supported regions.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
