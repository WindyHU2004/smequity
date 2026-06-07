import { useState } from 'react'
import { formatEUR, formatDate } from '../utils/format.js'
import { useAuth } from '../auth/AuthContext.jsx'
import { useListings } from '../data/ListingsContext.jsx'
import LoginPromptModal from '../components/LoginPromptModal.jsx'

export default function SecondaryMarket() {
  const [activeListing, setActiveListing] = useState(null)
  const [sent, setSent] = useState(null)
  const [showLoginPrompt, setShowLoginPrompt] = useState(false)
  const { isLoggedIn } = useAuth()
  const { listings } = useListings()

  function closeModal() {
    setActiveListing(null)
    setSent(null)
  }

  function handleNegotiateClick(listing) {
    if (!isLoggedIn) {
      setShowLoginPrompt(true)
      return
    }
    setActiveListing(listing)
  }

  function handleOfferSubmit(e) {
    e.preventDefault()
    const form = e.target
    setSent({
      name: form.name.value,
      offer: form.offer.value,
      message: form.message.value,
    })
  }

  return (
    <div className="container">
      <div className="page-header">
        <h1>Secondary Market — Bulletin Board</h1>
        <p>
          Browse stakes that existing investors are looking to sell. Once your own holdings pass
          the 12-month lock-up period, you can list them here too. Contact a seller to start a
          negotiation directly.
        </p>
      </div>

      <div className="section" style={{ paddingTop: 16 }}>
        {listings.map((l) => (
          <div className="listing-card" key={l.id}>
            <div className="listing-info">
              <span className="tag">{l.sector}</span>
              <h3 style={{ marginTop: 8 }}>{l.company}</h3>
              <div style={{ color: 'var(--text-muted)', fontSize: 14 }}>
                Listed by {l.seller} on {formatDate(l.listedOn)}
              </div>
              <div className="listing-stats">
                <div className="listing-stat">
                  <div className="label">Shares for sale</div>
                  <div className="value">{l.shares}</div>
                </div>
                <div className="listing-stat">
                  <div className="label">Asking price / share</div>
                  <div className="value">{formatEUR(l.askingPricePerShare)}</div>
                </div>
                <div className="listing-stat">
                  <div className="label">Total asking price</div>
                  <div className="value">{formatEUR(l.shares * l.askingPricePerShare)}</div>
                </div>
                <div className="listing-stat">
                  <div className="label">SMEquity reference price / share</div>
                  <div className="value" style={{ color: 'var(--teal)' }}>{formatEUR(l.referencePrice)}</div>
                </div>
              </div>
              <p className="listing-reference">
                Reference price {l.referencePeriod}, provided by SMEquity to help guide
                negotiations between buyers and sellers.
              </p>
              <p className="listing-note">"{l.note}"</p>
            </div>
            <div>
              <button className="btn btn-primary" onClick={() => handleNegotiateClick(l)}>
                Start Negotiation
              </button>
            </div>
          </div>
        ))}
      </div>

      {activeListing && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close">✕</button>

            {sent ? (
              <>
                <div className="confirm-icon" style={{ margin: '0 0 16px' }}>✓</div>
                <h2 style={{ marginTop: 0 }}>Offer sent</h2>
                <p style={{ color: 'var(--text-muted)' }}>
                  Your message has been "sent" to {activeListing.seller} regarding their listing
                  for {activeListing.shares} shares of {activeListing.company}.
                </p>
                <div className="confirm-details">
                  <div><strong>Your name:</strong> {sent.name}</div>
                  <div><strong>Your offer:</strong> {formatEUR(Number(sent.offer))} total</div>
                  <div><strong>Message:</strong> {sent.message || '—'}</div>
                </div>
                <button className="btn btn-primary btn-block" onClick={closeModal}>Close</button>
              </>
            ) : (
              <>
                <h2 style={{ marginTop: 0 }}>Negotiate — {activeListing.company}</h2>
                <p style={{ color: 'var(--text-muted)', marginTop: -8 }}>
                  Send {activeListing.seller} an opening offer and a short message. They are
                  asking {formatEUR(activeListing.askingPricePerShare)} per share (
                  {formatEUR(activeListing.shares * activeListing.askingPricePerShare)} total for{' '}
                  {activeListing.shares} shares).
                </p>
                <form onSubmit={handleOfferSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your name</label>
                    <input id="name" name="name" required className="form-control" placeholder="Jane Doe" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="offer">Your total offer (EUR)</label>
                    <input
                      id="offer"
                      name="offer"
                      type="number"
                      required
                      min="1"
                      className="form-control"
                      placeholder={String(activeListing.shares * activeListing.askingPricePerShare)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message (optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      rows="3"
                      placeholder="Introduce yourself and explain your offer..."
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Send offer</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {showLoginPrompt && (
        <LoginPromptModal onClose={() => setShowLoginPrompt(false)} />
      )}
    </div>
  )
}
