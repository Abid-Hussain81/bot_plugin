import InnerHeader from "@/components/shared/InnerHeader";
import SiteFooter from "@/components/shared/SiteFooter";
import styles from "../legal.module.css";

export default function RefundPage() {
  return (
    <div className={styles.page}>
      <InnerHeader active="" ctaLabel="Start Free Trial" ctaHref="/plans" />
      <main className={styles.main}>
        <div>
          <p className={styles.eyebrow}>Policy</p>
          <h1 className={styles.title}>Refund Policy</h1>
          <p className={styles.subtitle}>
            We want you to love the product. Here is how refunds and trials work
            for AISK.Chat subscriptions.
          </p>
        </div>

        <section className={styles.section}>
          <h2>Free trial</h2>
          <p>
            All plans include a 14-day free trial. You will not be charged if
            you cancel before the trial ends.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Refunds</h2>
          <p>
            If you are charged after your trial, you can request a refund within
            7 days of billing. We review each request to ensure fairness.
          </p>
        </section>

        <section className={styles.section}>
          <h2>How to request</h2>
          <p>
            Contact our support team with your account email and billing
            details. We respond within 2 business days.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
