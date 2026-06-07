import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { campaigns, getCampaignById } from '../data/campaigns.js'
import { formatEUR } from '../utils/format.js'

const MIN_INVESTMENT = 250

export default function Invest() {
  const { campaignId } = useParams()
  const navigate = useNavigate()

  const [selectedId, setSelectedId] = useState(campaignId || campaigns[0].id)
  const [amount, setAmount] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [confirmed, setConfirmed] = useState(null)

  const campaign = getCampaignById(selectedId)

  function handleSubmit(e) {
    e.preventDefault()
    const numericAmount = Number(amount)

    if (!name.trim() || !email.trim()) {
      setError('Please fill in your name and email address.')
      return
    }
    if (!amount || Number.isNaN(numericAmount)) {
      setError('Please enter a valid investment amount.')
      return
    }
    if (numericAmount < MIN_INVESTMENT) {
      setError(`The minimum investment amount is ${formatEUR(MIN_INVESTMENT)}.`)
      return
    }

    setError('')
    setConfirmed({
      campaign,
      amount: numericAmount,
      name,
      email,
      shares: Math.floor(numericAmount / campaign.sharePrice),
      reference: `SMEQ-${Date.now().toString().slice(-8)}`,
    })
  }

  if (confirmed) {
    return (
      <div className="container">
        <div className="section">
          <div className="confirm-box">
            <div className="confirm-icon">✓</div>
            <h2>Investment confirmed</h2>
            <p>
              Thank you, {confirmed.name}. Your simulated investment in {confirmed.campaign.name}{' '}
              has been recorded. A confirmation has been "sent" to {confirmed.email}.
            </p>
            <div className="confirm-details">
              <div><strong>Reference:</strong> {confirmed.reference}</div>
              <div><strong>Company:</strong> {confirmed.campaign.name} ({confirmed.campaign.sector})</div>
              <div><strong>Investment amount:</strong> {formatEUR(confirmed.amount)}</div>
              <div><strong>Approx. shares acquired:</strong> {confirmed.shares} (at {formatEUR(confirmed.campaign.sharePrice)}/share)</div>
              <div><strong>Lock-up period:</strong> 12 months from today before resale on the secondary market</div>
            </div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/portfolio" className="btn btn-primary">View my portfolio</Link>
              <Link to="/campaigns" className="btn btn-secondary">Browse more campaigns</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="page-header">
        <h1>Invest in an SME</h1>
        <p>Pick a campaign, choose how much you'd like to invest, and confirm your details below.</p>
      </div>

      <div className="section" style={{ paddingTop: 16 }}>
        <form className="form-card" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="campaign">Campaign</label>
            <select
              id="campaign"
              className="form-control"
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
            >
              {campaigns.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} — {c.sector}
                </option>
              ))}
            </select>
          </div>

          <div className="summary-box">
            <strong>{campaign.name}</strong> ({campaign.location}) is seeking{' '}
            {formatEUR(campaign.sought)} and has raised {formatEUR(campaign.raised)} so far.
            <br />
            Share price: <strong>{formatEUR(campaign.sharePrice)}</strong> · Minimum investment:{' '}
            <strong>{formatEUR(MIN_INVESTMENT)}</strong>
          </div>

          <div className="form-group">
            <label htmlFor="amount">Investment amount (EUR)</label>
            <input
              id="amount"
              type="number"
              min={MIN_INVESTMENT}
              step="50"
              className="form-control"
              placeholder={`e.g. 500`}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="hint">Minimum investment is {formatEUR(MIN_INVESTMENT)}.</div>
          </div>

          <div className="form-group">
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Jane Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="jane@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {error && <div className="error-text">{error}</div>}

          <button type="submit" className="btn btn-primary btn-block">
            Review &amp; confirm investment
          </button>
        </form>
      </div>
    </div>
  )
}
