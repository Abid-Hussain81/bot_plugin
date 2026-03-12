"use client";

import { useState } from "react";

export default function FAQ({ styles, items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className={styles.faq}>
      <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
      <div className={styles.faqList}>
        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.question}
              className={`${styles.faqItem} ${
                isOpen ? styles.faqItemOpen : ""
              }`}
            >
              <button
                type="button"
                className={styles.faqQuestionRow}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <span className={styles.faqIcon}>{isOpen ? "−" : "+"}</span>
              </button>
              <p className={styles.faqAnswer}>{item.answer}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
