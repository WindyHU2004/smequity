import { formatEUR } from '../utils/format.js'

export default function InvestmentBriefModal({ campaign, onClose }) {
  const { brief } = campaign
  if (!brief) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal brief-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="brief-header">
          <span className="tag">{campaign.sector}</span>
          <span className="tag tag-teal" style={{ marginLeft: 8 }}>{campaign.location}</span>
          <h2 style={{ margin: '12px 0 4px' }}>{campaign.name}</h2>
          <p className="brief-tagline">{brief.tagline}</p>
          <div className="brief-ask">
            Seeking <strong>{formatEUR(campaign.sought)}</strong> · Raised so far{' '}
            <strong>{formatEUR(campaign.raised)}</strong> · Share price{' '}
            <strong>{formatEUR(campaign.sharePrice)}</strong>
          </div>
        </div>

        <div className="brief-section">
          <h4>The problem</h4>
          <p>{brief.problem}</p>
        </div>
        <div className="brief-section">
          <h4>The solution</h4>
          <p>{brief.solution}</p>
        </div>
        <div className="brief-section">
          <h4>Business model</h4>
          <p>{brief.businessModel}</p>
        </div>
        <div className="brief-section">
          <h4>Traction so far</h4>
          <p>{brief.traction}</p>
        </div>
        <div className="brief-section">
          <h4>Use of funds</h4>
          <p>{brief.useOfFunds}</p>
        </div>
        <div className="brief-section">
          <h4>Key risks</h4>
          <p>{brief.risks}</p>
        </div>
        <div className="brief-section">
          <h4>Founding team</h4>
          <ul className="brief-team">
            {brief.team.map((member) => (
              <li key={member.name}>
                <strong>{member.name}</strong> — {member.role}
              </li>
            ))}
          </ul>
        </div>

        <p className="brief-footnote">
          This investment brief is a simulated document for demonstration purposes only and does
          not represent a real offer of securities.
        </p>
      </div>
    </div>
  )
}
