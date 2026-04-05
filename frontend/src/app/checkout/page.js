import Link from "next/link";
import InnerHeader from "@/components/shared/InnerHeader";
import styles from "./checkout.module.css";

const summaryRows = [
  { label: "Growth Plan", value: "$79.00" },
  { label: "WooCommerce plugin", value: "Included" },
  { label: "Priority onboarding", value: "Included" },
];

const nextSteps = [
  {
    title: "Connect your store",
    body: "We guide you through linking WooCommerce and syncing your catalog.",
  },
  {
    title: "Train your AI",
    body: "Upload FAQs, policies, and product docs in a few clicks.",
  },
  {
    title: "Go live fast",
    body: "Launch support across WhatsApp and Telegram with analytics on.",
  },
];

export default function CheckoutPage() {
  return (
    <div className={styles.page}>
      <InnerHeader active="checkout" ctaLabel="Back to Plans" ctaHref="/plans" />

      <main className={styles.main}>
        <section className={styles.progress}>
          <span className={styles.progressActive}>1. Plan</span>
          <span className={styles.progressActive}>2. Checkout</span>
          <span className={styles.progressInactive}>3. Launch</span>
        </section>

        <section className={styles.checkoutGrid}>
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <h1>Secure checkout</h1>
              <p>
                You are moments away from activating AI support for your store.
              </p>
            </div>

            <form className={styles.form}>
              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label htmlFor="fullName">Full name</label>
                  <input id="fullName" placeholder="Jane Doe" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="company">Company</label>
                  <input id="company" placeholder="Urban Kicks" />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Work email</label>
                <input id="email" type="email" placeholder="you@store.com" />
              </div>

              <div className={styles.field}>
                <label htmlFor="store">WooCommerce URL</label>
                <input id="store" placeholder="https://yourstore.com" />
              </div>

              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label htmlFor="cardNumber">Card number</label>
                  <input id="cardNumber" placeholder="1234 5678 9012 3456" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="expiry">Expiry</label>
                  <input id="expiry" placeholder="MM/YY" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="cvc">CVC</label>
                  <input id="cvc" placeholder="123" />
                </div>
              </div>

              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label htmlFor="country">Country</label>
                  <input id="country" placeholder="United States" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="zip">ZIP</label>
                  <input id="zip" placeholder="94107" />
                </div>
              </div>

              <div className={styles.checkboxRow}>
                <input id="terms" type="checkbox" defaultChecked />
                <label htmlFor="terms">
                  I agree to the terms and automatic monthly billing.
                </label>
              </div>

              <button type="button" className={styles.payButton}>
                Start my trial - $79 today
              </button>

              <div className={styles.formFootnote}>
                <span className={styles.lockBadge}>Secure</span>
                <span>256-bit SSL, cancel anytime during your trial.</span>
              </div>
            </form>
          </div>

          <aside className={styles.summaryCard}>
            <div className={styles.summaryHeader}>
              <p>Order summary</p>
              <span>Growth Plan</span>
            </div>

            <div className={styles.summaryRows}>
              {summaryRows.map((row) => (
                <div key={row.label} className={styles.summaryRow}>
                  <span>{row.label}</span>
                  <span>{row.value}</span>
                </div>
              ))}
            </div>

            <div className={styles.summaryList}>
              <h4>Included in your plan</h4>
              <ul>
                <li>Up to 8,000 conversations</li>
                <li>Multilingual responses</li>
                <li>Analytics dashboard</li>
              </ul>
            </div>

            <div className={styles.promoRow}>
              <input placeholder="Promo code" />
              <button type="button">Apply</button>
            </div>

            <div className={styles.summaryTotal}>
              <span>Total due today</span>
              <span>$79.00</span>
            </div>

            <div className={styles.summaryFooter}>
              <p>Includes a 14-day free trial. Cancel anytime.</p>
              <div className={styles.summaryBadge}>PCI Secure Checkout</div>
              <div className={styles.paymentRow}>
                <span>Visa</span>
                <span>Mastercard</span>
                <span>Amex</span>
                <span>PayPal</span>
              </div>
            </div>
          </aside>
        </section>

        <section className={styles.nextSteps}>
          <div className={styles.nextHeader}>
            <h2>What happens next</h2>
            <p>Our onboarding team will help you launch in under a day.</p>
          </div>
          <div className={styles.nextGrid}>
            {nextSteps.map((step, index) => (
              <article key={step.title} className={styles.nextCard}>
                <span className={styles.nextIndex}>{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.trustStrip}>
          <div>
            <h3>Need help migrating?</h3>
            <p>Our team will import your FAQs and catalog within 24 hours.</p>
          </div>
          <Link href="/plans" className={styles.secondaryButton}>
            Talk to sales
          </Link>
        </section>
      </main>
    </div>
  );
}
