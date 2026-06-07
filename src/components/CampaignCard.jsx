import { useState } from 'react'
import { Link } from 'react-router-dom'
import { formatEUR } from '../utils/format.js'
import InvestmentBriefModal from './InvestmentBriefModal.jsx'
import LoginPromptModal from './LoginPromptModal.jsx'
import { useAuth } from '../auth/AuthContext.jsx'

export default function CampaignCard({ campaign }) {
  const pct = Math.min(100, Math.round((campaign.raised / campaign.sought) * 100))
  const [showBrief, setShowBrief] = useState(false)
  const [showLoginPrompt, setShowLoginPrompt] = useState(false)
  const { isLoggedIn } = useAuth()

  function handleInvestClick(e) {
    if (!isLoggedIn) {
      e.preventDefault()
      setShowLoginPrompt(true)
    }
  }

  return (
    <div className="campaign-card">
      <div className="campaign-meta" style={{ justifyContent: 'space-between' }}>
        <div>
          <span className="tag">{campaign.sector}</span>
          <span>· {campaign.location}</span>
        </div>
        <button type="button" className="btn-brief-link" onClick={() => setShowBrief(true)}>
          View Investment Brief
        </button>
      </div>
      <h3>{campaign.name}</h3>
      <p className="campaign-desc">{campaign.description}</p>

      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <div className="progress-labels">
        <span>
          <strong>{formatEUR(campaign.raised)}</strong> raised of {formatEUR(campaign.sought)}
        </span>
        <span>{pct}%</span>
      </div>

      <div className="card-actions">
        <span className="tag tag-teal">Min. investment {formatEUR(campaign.minInvestment)}</span>
        <Link to={`/invest/${campaign.id}`} className="btn btn-primary" onClick={handleInvestClick}>
          Invest now
        </Link>
      </div>

      {showBrief && (
        <InvestmentBriefModal campaign={campaign} onClose={() => setShowBrief(false)} />
      )}
      {showLoginPrompt && (
        <LoginPromptModal onClose={() => setShowLoginPrompt(false)} />
      )}
    </div>
  )
}
