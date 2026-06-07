import { useState } from 'react'
import { investor, holdings, isTradeable, unlockDateOf } from '../data/portfolio.js'
import { formatEUR, formatDate } from '../utils/format.js'
import { useListings } from '../data/ListingsContext.jsx'
import Toast from '../components/Toast.jsx'

export default function Portfolio() {
  const today = new Date()
  const { addListing } = useListings()

  const [listedIds, setListedIds] = useState(() => new Set())
  const [lockedInfoHolding, setLockedInfoHolding] = useState(null)
  const [flow, setFlow] = useState(null) // { holding, step: 'confirm' | 'form' | 'warning' }
  const [form, setForm] = useState({ shares: '', price: '', reason: '' })
  const [toastMessage, setToastMessage] = useState('')

  const enriched = holdings.map((h) => {
    const investedAmount = h.shares * h.purchasePrice
    const currentValue = h.shares * h.currentPrice
    const gain = currentValue - investedAmount
    const gainPct = (gain / investedAmount) * 100
    const tradeable = isTradeable(h.investedOn, today)
    const listed = listedIds.has(h.id)
    return { ...h, investedAmount, currentValue, gain, gainPct, tradeable, listed }
  })

  const totalInvested = enriched.reduce((sum, h) => sum + h.investedAmount, 0)
  const totalCurrentValue = enriched.reduce((sum, h) => sum + h.currentValue, 0)
  const totalGain = totalCurrentValue - totalInvested
  const tradeableCount = enriched.filter((h) => h.tradeable).length

  function startSellFlow(holding) {
    setFlow({ holding, step: 'confirm' })
  }

  function proceedToForm() {
    setForm({
      shares: '',
      price: String(flow.holding.referencePrice),
      reason: '',
    })
    setFlow((f) => ({ ...f, step: 'form' }))
  }

  function proceedToWarning(e) {
    e.preventDefault()
    setFlow((f) => ({ ...f, step: 'warning' }))
  }

  function confirmListing() {
    const { holding } = flow
    addListing({
      company: holding.company,
      sector: holding.sector,
      shares: Number(form.shares),
      pricePerShare: Number(form.price),
      reason: form.reason,
      referencePrice: holding.referencePrice,
    })
    setListedIds((prev) => new Set(prev).add(holding.id))
    setFlow(null)
    setToastMessage(`Your shares in ${holding.company} have been listed on the Secondary Market`)
  }

  const numShares = Number(form.shares) || 0
  const numPrice = Number(form.price) || 0
  const totalValue = numShares * numPrice

  return (
    <div className="container">
      <div className="page-header">
        <h1>My Portfolio</h1>
        <p>
          Welcome back, {investor.name}. Here's an overview of your current holdings, their
          estimated value, and which stakes are now past the 12-month lock-up period and eligible
          for resale on the secondary market.
        </p>
      </div>

      <div className="section" style={{ paddingTop: 16 }}>
        <div className="stat-cards">
          <div className="stat-card">
            <div className="label">Total invested</div>
            <div className="value">{formatEUR(totalInvested)}</div>
            <div className="sub">Across {enriched.length} companies</div>
          </div>
          <div className="stat-card">
            <div className="label">Estimated current value</div>
            <div className="value">{formatEUR(totalCurrentValue)}</div>
            <div className="sub" style={{ color: totalGain >= 0 ? 'var(--teal)' : '#c0392b' }}>
              {totalGain >= 0 ? '+' : ''}
              {formatEUR(totalGain)} ({totalGain >= 0 ? '+' : ''}
              {((totalGain / totalInvested) * 100).toFixed(1)}%) overall
            </div>
          </div>
          <div className="stat-card">
            <div className="label">Tradeable holdings</div>
            <div className="value">{tradeableCount} / {enriched.length}</div>
            <div className="sub">Past the 12-month lock-up period</div>
          </div>
        </div>

        <div className="note-banner">
          Lock-up policy: shares purchased through SMEquity become tradeable on the secondary
          market exactly 12 months after the investment date. Today's date for this demo is{' '}
          {formatDate(today.toISOString())}. Click on a status badge below for more information.
        </div>

        <table className="holdings">
          <thead>
            <tr>
              <th>Company</th>
              <th>Sector</th>
              <th>Shares</th>
              <th>Purchase price</th>
              <th>Current price</th>
              <th>Current value</th>
              <th>Gain / loss</th>
              <th>Invested on</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {enriched.map((h) => (
              <tr key={h.id}>
                <td><strong>{h.company}</strong></td>
                <td>{h.sector}</td>
                <td>{h.shares}</td>
                <td>{formatEUR(h.purchasePrice)}</td>
                <td>{formatEUR(h.currentPrice)}</td>
                <td>{formatEUR(h.currentValue)}</td>
                <td className={h.gain >= 0 ? 'gain-positive' : 'gain-negative'}>
                  {h.gain >= 0 ? '+' : ''}
                  {formatEUR(h.gain)} ({h.gain >= 0 ? '+' : ''}
                  {h.gainPct.toFixed(1)}%)
                </td>
                <td>{formatDate(h.investedOn)}</td>
                <td>
                  {h.listed ? (
                    <span className="status-pill listed">Listed for sale</span>
                  ) : h.tradeable ? (
                    <button type="button" className="status-pill-btn tradeable" onClick={() => startSellFlow(h)}>
                      Tradeable now
                    </button>
                  ) : (
                    <button type="button" className="status-pill-btn locked" onClick={() => setLockedInfoHolding(h)}>
                      Locked until {formatDate(unlockDateOf(h.investedOn).toISOString())}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Locked info modal */}
      {lockedInfoHolding && (
        <div className="modal-backdrop" onClick={() => setLockedInfoHolding(null)}>
          <div className="modal" style={{ maxWidth: 440 }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setLockedInfoHolding(null)} aria-label="Close">✕</button>
            <h2 style={{ marginTop: 8 }}>Holding locked</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
              This holding is still within the mandatory 12-month holding period under ECSPR
              regulations. You will be able to list these shares for sale on the Secondary Market
              once the lock-up expires.
            </p>
            <button className="btn btn-primary btn-block" onClick={() => setLockedInfoHolding(null)}>Close</button>
          </div>
        </div>
      )}

      {/* Step 1: Sell confirmation */}
      {flow?.step === 'confirm' && (
        <div className="modal-backdrop" onClick={() => setFlow(null)}>
          <div className="modal" style={{ maxWidth: 440, textAlign: 'center' }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setFlow(null)} aria-label="Close">✕</button>
            <h2 style={{ marginTop: 8 }}>
              Would you like to sell your shares in {flow.holding.company}?
            </h2>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 16, flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={proceedToForm}>Yes, let's proceed</button>
              <button className="btn btn-secondary" onClick={() => setFlow(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Listing form */}
      {flow?.step === 'form' && (
        <div className="modal-backdrop" onClick={() => setFlow(null)}>
          <div className="modal" style={{ maxWidth: 520 }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setFlow(null)} aria-label="Close">✕</button>
            <h2 style={{ marginTop: 8 }}>List your shares for sale</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: -6, fontSize: 14.5 }}>
              {flow.holding.company} — you currently hold {flow.holding.shares} shares.
            </p>

            <form onSubmit={proceedToWarning}>
              <div className="form-group">
                <label>SMEquity reference price per share</label>
                <input className="form-control" value={formatEUR(flow.holding.referencePrice)} disabled />
                <div className="hint">
                  This reference price is calculated by SMEquity based on the company's latest
                  financials and prior secondary market transactions. You are free to set your own
                  price.
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="sellShares">Number of shares to sell</label>
                <input
                  id="sellShares"
                  type="number"
                  className="form-control"
                  min={1}
                  max={flow.holding.shares}
                  value={form.shares}
                  onChange={(e) => setForm((f) => ({ ...f, shares: e.target.value }))}
                  placeholder={`1 – ${flow.holding.shares}`}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="sellPrice">Price per share (EUR)</label>
                <input
                  id="sellPrice"
                  type="number"
                  className="form-control"
                  min={1}
                  step="0.5"
                  value={form.price}
                  onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))}
                  required
                />
              </div>

              <div className="summary-box">
                Total listing value: <strong>{formatEUR(totalValue)}</strong>
                {numShares > flow.holding.shares && (
                  <div className="error-text" style={{ marginTop: 6 }}>
                    You cannot list more shares than you own ({flow.holding.shares}).
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="sellReason">Reason for selling (optional)</label>
                <textarea
                  id="sellReason"
                  className="form-control"
                  rows="3"
                  placeholder="e.g. rebalancing portfolio, liquidity needs"
                  value={form.reason}
                  onChange={(e) => setForm((f) => ({ ...f, reason: e.target.value }))}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={!form.shares || !form.price || numShares < 1 || numShares > flow.holding.shares}
              >
                Post my shares on the Secondary Market
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Step 3: Final warning */}
      {flow?.step === 'warning' && (
        <div className="modal-backdrop" onClick={() => setFlow((f) => ({ ...f, step: 'form' }))}>
          <div className="modal" style={{ maxWidth: 480 }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setFlow((f) => ({ ...f, step: 'form' }))} aria-label="Close">✕</button>
            <h2 style={{ marginTop: 8 }}>Are you sure you want to list these shares?</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.65, fontSize: 14.5 }}>
              Once posted, your listing will be visible to all investors on the Secondary Market.
              Existing investors in {flow.holding.company} will be notified first and given 10 days
              to purchase before the listing opens to all platform users. Your shares remain yours
              until a buyer agrees to a price and the transaction settles in the next monthly
              clearing window (last 5 business days of the month). This action cannot be undone
              without manually removing the listing.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 16, flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={confirmListing}>Confirm and post listing</button>
              <button className="btn btn-secondary" onClick={() => setFlow((f) => ({ ...f, step: 'form' }))}>Go back</button>
            </div>
          </div>
        </div>
      )}

      <Toast message={toastMessage} onClose={() => setToastMessage('')} />
    </div>
  )
}
