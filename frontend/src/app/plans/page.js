import Link from "next/link";
import InnerHeader from "@/components/shared/InnerHeader";
import styles from "./plans.module.css";

const plans = [
  {
    name: "Starter",
    price: "$29",
    cadence: "/mo",
    description: "For new stores getting their first automated support wins.",
    features: [
      "Up to 1,000 chats",
      "WhatsApp + Telegram",
      "FAQ + product knowledge",
      "Basic analytics",
    ],
    cta: "Select Starter",
  },
  {
    name: "Growth",
    price: "$79",
    cadence: "/mo",
    description: "Perfect for scaling stores that need faster response times.",
    features: [
      "Up to 8,000 chats",
      "Multilingual responses",
      "Priority routing",
      "Advanced analytics + exports",
    ],
    cta: "Select Growth",
    badge: "Most Popular",
  },
  {
    name: "Pro",
    price: "$149",
    cadence: "/mo",
    description: "For high-volume teams that want deeper automation controls.",
    features: [
      "Unlimited chats",
      "Custom AI tone + workflows",
      "Dedicated success manager",
      "Custom integrations",
    ],
    cta: "Select Pro",
  },
];

const highlights = [
  {
    title: "Works with WooCommerce",
    body:
      "Sync products, collections, and orders in minutes. No extra setup required.",
  },
  {
    title: "Live in 15 minutes",
    body:
      "Upload your catalog, connect your channels, and launch in a single session.",
  },
  {
    title: "Secure by default",
    body:
      "PII protection, audit logs, and encrypted conversations out of the box.",
  },
];

const comparisonRows = [
  {
    label: "Monthly conversations",
    values: ["1,000", "8,000", "Unlimited"],
  },
  {
    label: "WhatsApp + Telegram",
    values: ["Included", "Included", "Included"],
  },
  {
    label: "WooCommerce catalog sync",
    values: ["Included", "Included", "Included"],
  },
  {
    label: "Custom AI tone",
    values: ["Basic", "Advanced", "Custom"],
  },
  {
    label: "Priority handoff",
    values: ["-", "Yes", "Yes"],
  },
  {
    label: "Team seats",
    values: ["2", "6", "Unlimited"],
  },
  {
    label: "Dedicated success manager",
    values: ["-", "-", "Yes"],
  },
];

const steps = [
  {
    title: "Install plugin",
    body: "Add AISK to WooCommerce and connect your store in minutes.",
  },
  {
    title: "Train your AI",
    body: "Upload FAQs, policies, and product docs to shape responses.",
  },
  {
    title: "Launch & monitor",
    body: "Go live and track conversations with actionable analytics.",
  },
];

const faqs = [
  {
    question: "Can I switch plans later?",
    answer:
      "Yes, upgrade or downgrade anytime. Your data and settings move with you.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "All paid plans include a 14-day free trial with full functionality.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "No setup fees. You only pay the subscription that fits your volume.",
  },
];

export default function PlansPage() {
  return (
    <div className={styles.page}>
      <InnerHeader
        active="plans"
        ctaLabel="Start Free Trial"
        ctaHref="/checkout"
      />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>Pricing</p>
            <h1 className={styles.title}>Pick a plan that grows with your store</h1>
            <p className={styles.subtitle}>
              Launch AI support for WooCommerce in minutes. Upgrade anytime as
              your volume scales.
            </p>
            <div className={styles.billingToggle}>
              <span className={styles.billingLabelActive}>Monthly</span>
              <span className={styles.billingLabel}>Annual (save 20%)</span>
            </div>
          </div>
          <div className={styles.heroCard}>
            <h3>What you get</h3>
            <ul className={styles.heroList}>
              <li>Instant setup with guided onboarding</li>
              <li>AI answers trained on your catalog</li>
              <li>Human handoff with full context</li>
              <li>Analytics dashboard &amp; response ratings</li>
            </ul>
            <p className={styles.heroFootnote}>
              All plans include the WooCommerce plugin and support.
            </p>
          </div>
        </section>

        <section className={styles.planGrid}>
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`${styles.planCard} ${
                plan.badge ? styles.planCardPopular : ""
              }`}
            >
              <div className={styles.planTop}>
                <div>
                  <p className={styles.planName}>{plan.name}</p>
                  <p className={styles.planPrice}>
                    <span>{plan.price}</span>
                    {plan.cadence}
                  </p>
                </div>
                {plan.badge ? (
                  <span className={styles.planBadge}>{plan.badge}</span>
                ) : null}
              </div>
              <p className={styles.planDescription}>{plan.description}</p>
              <ul className={styles.planList}>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link href="/checkout" className={styles.planButton}>
                {plan.cta}
              </Link>
            </article>
          ))}
        </section>

        <section className={styles.highlightGrid}>
          {highlights.map((item) => (
            <article key={item.title} className={styles.highlightCard}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </section>

        <section className={styles.stepsSection}>
          <div className={styles.sectionHeader}>
            <h2>Launch in three steps</h2>
            <p>Go from install to live support without the heavy lift.</p>
          </div>
          <div className={styles.stepsGrid}>
            {steps.map((step, index) => (
              <article key={step.title} className={styles.stepCard}>
                <span className={styles.stepIndex}>{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.comparisonSection}>
          <div className={styles.sectionHeader}>
            <h2>Compare plans</h2>
            <p>See the features that unlock at every tier.</p>
          </div>
          <div className={styles.comparisonTable}>
            <div className={styles.comparisonHeader}>
              <span />
              <span>Starter</span>
              <span>Growth</span>
              <span>Pro</span>
            </div>
            {comparisonRows.map((row) => (
              <div key={row.label} className={styles.comparisonRow}>
                <span className={styles.comparisonLabel}>{row.label}</span>
                {row.values.map((value, idx) => (
                  <span
                    key={`${row.label}-${idx}`}
                    className={styles.comparisonValue}
                  >
                    {value}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.sectionHeader}>
            <h2>Pricing questions</h2>
            <p>Everything you need to know before choosing a plan.</p>
          </div>
          <div className={styles.faqGrid}>
            {faqs.map((item) => (
              <article key={item.question} className={styles.faqCard}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.finalCta}>
          <div>
            <h2>Ready to start selling with AI?</h2>
            <p>Spin up your AI support team today and see results this week.</p>
          </div>
          <Link href="/checkout" className={styles.finalButton}>
            Start free trial
          </Link>
        </section>
      </main>
    </div>
  );
}
