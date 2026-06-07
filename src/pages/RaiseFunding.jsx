import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProcessTimeline from '../components/ProcessTimeline.jsx'
import FaqAccordion from '../components/FaqAccordion.jsx'

const faqItems = [
  {
    question: 'What does it cost to list on SMEquity?',
    answer:
      'There is a one-time listing fee of €1,500 to €3,000 to cover due diligence and campaign preparation. If your campaign is successful, a 6% success fee is charged on the total amount raised. You pay nothing if the campaign does not reach its target.',
  },
  {
    question: 'How long does the process take?',
    answer:
      'From initial application to campaign launch typically takes 4 to 8 weeks depending on how quickly due diligence can be completed. Campaigns themselves run for a maximum of 90 days.',
  },
  {
    question: 'Who can invest in my campaign?',
    answer:
      'Any retail investor registered on the SMEquity platform can invest, with a minimum of €250 per investment.',
  },
  {
    question: 'What is a STAK and why does SMEquity use it?',
    answer:
      'A Stichting Administratiekantoor is a Dutch legal structure that holds shares on behalf of investors, issuing depositary receipts in return. This means your shareholder register stays clean while investors still hold full economic rights. It also makes secondary market transfers much simpler.',
  },
  {
    question: 'What happens after the campaign closes?',
    answer:
      'Funds are transferred, ownership is recorded through the STAK, and investors enter a 12-month mandatory holding period before they can sell on the secondary market.',
  },
  {
    question: 'Is SMEquity regulated?',
    answer:
      'Yes. SMEquity operates under the European Crowdfunding Service Provider Regulation (ECSPR) and is supervised by the AFM.',
  },
]

const initialForm = {
  contactName: '',
  email: '',
  jobTitle: '',
  companyName: '',
  website: '',
  sector: '',
  yearsInOperation: '',
  fundingGoal: '',
  notes: '',
}

export default function RaiseFunding() {
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(null)

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.contactName.trim() || !form.email.trim() || !form.companyName.trim()) {
      setError('Please fill in at least your name, email address, and company name.')
      return
    }
    setError('')
    setSubmitted({ ...form })
  }

  if (submitted) {
    return (
      <div className="container">
        <div className="section">
          <div className="confirm-box">
            <div className="confirm-icon">✓</div>
            <h2>Thanks for reaching out, {submitted.contactName}!</h2>
            <p>
              We've received your details for <strong>{submitted.companyName}</strong>. A
              representative from SMEquity will review your information and contact you at{' '}
              {submitted.email} within the next few business days to discuss next steps.
            </p>
            <div className="confirm-details">
              <div><strong>Company:</strong> {submitted.companyName}</div>
              <div><strong>Contact:</strong> {submitted.contactName}{submitted.jobTitle ? ` (${submitted.jobTitle})` : ''}</div>
              <div><strong>Website:</strong> {submitted.website || '—'}</div>
              <div><strong>Sector:</strong> {submitted.sector || '—'}</div>
              <div><strong>Years in operation:</strong> {submitted.yearsInOperation || '—'}</div>
              <div><strong>Indicative funding goal:</strong> {submitted.fundingGoal || '—'}</div>
            </div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/" className="btn btn-primary">Back to homepage</Link>
              <Link to="/campaigns" className="btn btn-secondary">View primary market</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="page-header">
        <h1>Raise funding for your SME</h1>
        <p>
          SMEquity helps Dutch SMEs raise equity funding from retail investors through a
          structured, regulated process. Here's what that journey looks like, answers to common
          questions, and a short form to get started.
        </p>
      </div>

      <section className="section">
        <h2 className="section-title">How the process works</h2>
        <p className="section-subtitle">
          From first conversation to a tradeable stake on the secondary market — six clear steps.
        </p>
        <ProcessTimeline />
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <h2 className="section-title">Frequently asked questions</h2>
        <p className="section-subtitle">Everything SMEs typically want to know before applying.</p>
        <FaqAccordion items={faqItems} />
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <h2 className="section-title">Apply to raise funding</h2>
        <p className="section-subtitle">
          Tell us a little about your company. This is just a first introduction — please share
          only essential, non-confidential information. There's no need to disclose financials,
          trade secrets, or anything sensitive at this stage.
        </p>
        <form className="form-card" onSubmit={handleSubmit}>
          <div className="note-banner">
            After you submit this form, a representative from SMEquity will get in touch to
            discuss whether your company is a good fit and what a fundraising campaign could look
            like.
          </div>

          <div className="form-group">
            <label htmlFor="contactName">Contact person's name</label>
            <input id="contactName" className="form-control" placeholder="Jane Doe" value={form.contactName} onChange={update('contactName')} />
          </div>

          <div className="form-group">
            <label htmlFor="jobTitle">Job title</label>
            <input id="jobTitle" className="form-control" placeholder="Founder & CEO" value={form.jobTitle} onChange={update('jobTitle')} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input id="email" type="email" className="form-control" placeholder="jane@company.nl" value={form.email} onChange={update('email')} />
          </div>

          <div className="form-group">
            <label htmlFor="companyName">Company name</label>
            <input id="companyName" className="form-control" placeholder="Company B.V." value={form.companyName} onChange={update('companyName')} />
          </div>

          <div className="form-group">
            <label htmlFor="website">Company website</label>
            <input id="website" className="form-control" placeholder="https://www.company.nl" value={form.website} onChange={update('website')} />
          </div>

          <div className="form-group">
            <label htmlFor="sector">Sector / industry</label>
            <input id="sector" className="form-control" placeholder="e.g. Food & Beverage, HealthTech, Manufacturing" value={form.sector} onChange={update('sector')} />
          </div>

          <div className="form-group">
            <label htmlFor="yearsInOperation">Number of years in operation</label>
            <input id="yearsInOperation" type="number" min="0" className="form-control" placeholder="e.g. 5" value={form.yearsInOperation} onChange={update('yearsInOperation')} />
          </div>

          <div className="form-group">
            <label htmlFor="fundingGoal">Indicative funding goal (optional)</label>
            <input id="fundingGoal" className="form-control" placeholder="e.g. €250,000" value={form.fundingGoal} onChange={update('fundingGoal')} />
          </div>

          <div className="form-group">
            <label htmlFor="notes">Anything else you'd like us to know? (optional)</label>
            <textarea id="notes" rows="3" className="form-control" placeholder="A short note about your company or what you're looking for..." value={form.notes} onChange={update('notes')} />
            <div className="hint">Please don't include confidential or sensitive information here — this is just an introduction.</div>
          </div>

          {error && <div className="error-text">{error}</div>}

          <button type="submit" className="btn btn-primary btn-block">Submit my details</button>
        </form>
      </section>
    </div>
  )
}
