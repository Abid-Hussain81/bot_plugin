import styles from "./landing.module.css";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Integrations from "./sections/Integrations";
import Knowledge from "./sections/Knowledge";
import MustHave from "./sections/MustHave";
import Steps from "./sections/Steps";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";

const featureCards = [
  {
    title: "Automated responses in real time",
    body:
      "Reduce support load with smart, instant replies that feel human and stay on brand.",
  },
  {
    title: "Send product recommendations that convert",
    body:
      "Deliver personalized suggestions and bundles that match customer intent.",
  },
  {
    title: "Drive shopping made effortless",
    body:
      "Guide customers from question to checkout without the back-and-forth.",
  },
];

const integrations = [
  {
    title: "WhatsApp Integration: Your Store In Their Pocket",
    body:
      "Keep high-intent customers in the chat. Share orders, recommendations, and updates in the channel they already use.",
    cta: "Learn More",
    accent: "accentEmerald",
  },
  {
    title: "Telegram Support: Engage Tech-Savvy Customers",
    body:
      "Automate updates, answer product questions, and capture leads with lightning-fast replies.",
    cta: "Learn More",
    accent: "accentBlue",
  },
];

const knowledgePoints = [
  "Import manuals, policy docs, and catalogs in seconds.",
  "Train on FAQs and product specs for reliable answers.",
  "Sync new content without rebuilding your flows.",
];

const steps = [
  {
    title: "Connect your channels",
    body: "Link WhatsApp, Telegram, and your storefront in minutes.",
  },
  {
    title: "Upload your knowledge",
    body: "Import product catalogs, policies, and FAQs in one go.",
  },
  {
    title: "Launch and monitor",
    body: "Go live instantly and refine responses with analytics.",
  },
];

const testimonials = [
  {
    name: "Nisha Patel",
    role: "Head of CX, Urban Kicks",
    body:
      "We cut response time by 80% and doubled WhatsApp conversions in two weeks.",
  },
  {
    name: "Alex Romero",
    role: "Founder, Gadget Grove",
    body:
      "AISK handles the repetitive questions so my team can focus on VIP customers.",
  },
  {
    name: "Sofia Chen",
    role: "Growth Lead, Aroma Lab",
    body:
      "The setup was easy and the bot started paying for itself within days.",
  },
  {
    name: "Jordan Miles",
    role: "Ops Manager, Craft Corner",
    body:
      "Our Telegram support finally feels premium and consistent, even after hours.",
  },
];

const faqItems = [
  {
    question: "How does AISK connect to my store?",
    answer:
      "Connect via a simple plugin or API key. Once linked, AISK syncs products, policies, and orders automatically.",
  },
  {
    question: "Do I need to write any code?",
    answer:
      "No coding required. You can set everything up from the dashboard in a few guided steps.",
  },
  {
    question: "Can I customize the AI voice?",
    answer:
      "Yes. Adjust tone, greetings, and escalation rules to match your brand’s style.",
  },
  {
    question: "What support channels are available?",
    answer:
      "WhatsApp and Telegram are included, with more channels available based on your plan.",
  },
  {
    question: "What happens when the AI is unsure?",
    answer:
      "AISK hands off to your team with full context so customers never feel stuck.",
  },
];

export default function LandingPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Hero styles={styles} />
        <Features styles={styles} items={featureCards} />
        <Integrations styles={styles} items={integrations} />
        <Knowledge styles={styles} points={knowledgePoints} />
        <MustHave styles={styles} />
        <Steps styles={styles} steps={steps} />
        <Testimonials styles={styles} items={testimonials} />
        <FAQ styles={styles} items={faqItems} />
        <CTA styles={styles} />
      </main>
      <Footer styles={styles} />
    </div>
  );
}
