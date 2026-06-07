import { useState } from 'react'

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={i} className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button
              type="button"
              className="faq-question"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <span className="faq-chevron">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <div className="faq-answer">{item.answer}</div>}
          </div>
        )
      })}
    </div>
  )
}
