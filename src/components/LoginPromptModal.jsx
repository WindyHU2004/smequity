import { useNavigate } from 'react-router-dom'

export default function LoginPromptModal({ onClose }) {
  const navigate = useNavigate()

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" style={{ maxWidth: 420, textAlign: 'center' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <h2 style={{ marginTop: 8 }}>Would you like to log in?</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
          You'll need to be logged in to your SMEquity account to invest or make an offer. You can
          log in now, or keep browsing without an account.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 16, flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={() => navigate('/login')}>
            Yes, log in
          </button>
          <button className="btn btn-secondary" onClick={onClose}>
            No, keep browsing
          </button>
        </div>
      </div>
    </div>
  )
}
