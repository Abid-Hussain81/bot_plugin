import InnerHeader from "@/components/shared/InnerHeader";
import SiteFooter from "@/components/shared/SiteFooter";
import styles from "../legal.module.css";

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <InnerHeader active="" ctaLabel="Start Free Trial" ctaHref="/plans" />
      <main className={styles.main}>
        <div>
          <p className={styles.eyebrow}>Policy</p>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.subtitle}>
            These terms outline how you can use AISK.Chat and what to expect
            from our services.
          </p>
        </div>

        <section className={styles.section}>
          <h2>Account responsibilities</h2>
          <p>
            You are responsible for maintaining the security of your account,
            configuring your AI settings, and ensuring the content you provide
            is accurate and lawful.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Acceptable use</h2>
          <p>
            You agree not to misuse the platform, interfere with service
            availability, or violate any laws when using AISK.Chat.
          </p>
          <ul>
            <li>No spam or abusive automated messaging.</li>
            <li>No attempts to reverse engineer the service.</li>
            <li>Respect privacy and data protection rules.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Billing &amp; cancellations</h2>
          <p>
            Plans renew monthly unless canceled. You can manage billing from
            your dashboard at any time.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
