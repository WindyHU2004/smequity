import { useState } from 'react'
import { investor } from '../data/portfolio.js'

const initialPaymentMethods = [
  { id: 'pm1', type: 'IBAN Bank Account', details: 'NL91 ABNA 0417 1643 00', primary: true },
  { id: 'pm2', type: 'Credit Card', details: 'Visa •••• 4831 — exp. 09/28', primary: false },
]

export default function Profile() {
  const [firstName, setFirstName] = useState(investor.name.split(' ')[0])
  const [lastName, setLastName] = useState(investor.name.split(' ').slice(1).join(' '))
  const [email, setEmail] = useState(investor.email)
  const [newEmail, setNewEmail] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [paymentMethods, setPaymentMethods] = useState(initialPaymentMethods)
  const [savedMessage, setSavedMessage] = useState('')
  const [currentPlan, setCurrentPlan] = useState('free')
  const [pendingPlan, setPendingPlan] = useState(null)

  function confirmSwitch() {
    setCurrentPlan(pendingPlan)
    setSavedMessage(
      pendingPlan === 'premium'
        ? 'You have switched to the Premium plan. (Demo only — no real payment was processed.)'
        : 'You have switched to the Free plan. (Demo only — no real payment was processed.)'
    )
    setPendingPlan(null)
  }

  function handleDetailsSave(e) {
    e.preventDefault()
    setSavedMessage('Your profile details have been updated.')
  }

  function handleEmailChange(e) {
    e.preventDefault()
    if (newEmail.trim()) {
      setEmail(newEmail.trim())
      setNewEmail('')
      setSavedMessage('Your email address has been updated.')
    }
  }

  function handlePasswordChange(e) {
    e.preventDefault()
    if (currentPassword && newPassword) {
      setCurrentPassword('')
      setNewPassword('')
      setSavedMessage('Your password has been changed.')
    }
  }

  function setPrimary(id) {
    setPaymentMethods((methods) =>
      methods.map((m) => ({ ...m, primary: m.id === id }))
    )
    setSavedMessage('Your primary payment method has been updated.')
  }

  function removeMethod(id) {
    setPaymentMethods((methods) => methods.filter((m) => m.id !== id))
    setSavedMessage('Payment method removed.')
  }

  return (
    <div className="container">
      <div className="page-header">
        <h1>My Profile</h1>
        <p>Manage your personal details, login credentials, and payment methods.</p>
      </div>

      <div className="section profile-layout" style={{ paddingTop: 16 }}>
      <div style={{ display: 'grid', gap: 24, minWidth: 0 }}>
        {savedMessage && (
          <div className="note-banner" style={{ marginBottom: 0 }}>{savedMessage}</div>
        )}

        {/* Personal details */}
        <form className="form-card" style={{ maxWidth: 640 }} onSubmit={handleDetailsSave}>
          <h3 style={{ marginTop: 0 }}>Personal details</h3>
          <div className="form-group">
            <label htmlFor="firstName">First name</label>
            <input id="firstName" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Surname</label>
            <input id="lastName" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary">Save details</button>
        </form>

        {/* Email */}
        <form className="form-card" style={{ maxWidth: 640 }} onSubmit={handleEmailChange}>
          <h3 style={{ marginTop: 0 }}>Email address</h3>
          <div className="form-group">
            <label>Current email</label>
            <input className="form-control" value={email} disabled />
          </div>
          <div className="form-group">
            <label htmlFor="newEmail">New email address</label>
            <input
              id="newEmail"
              type="email"
              className="form-control"
              placeholder="new.email@example.com"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Update email</button>
        </form>

        {/* Password */}
        <form className="form-card" style={{ maxWidth: 640 }} onSubmit={handlePasswordChange}>
          <h3 style={{ marginTop: 0 }}>Password</h3>
          <div className="form-group">
            <label htmlFor="currentPassword">Current password</label>
            <input
              id="currentPassword"
              type="password"
              className="form-control"
              placeholder="••••••••"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">New password</label>
            <input
              id="newPassword"
              type="password"
              className="form-control"
              placeholder="••••••••"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Change password</button>
        </form>

        {/* Payment methods */}
        <div className="form-card" style={{ maxWidth: 640 }}>
          <h3 style={{ marginTop: 0 }}>Payment methods</h3>
          {paymentMethods.length === 0 && (
            <p style={{ color: 'var(--text-muted)' }}>You have no payment methods on file.</p>
          )}
          {paymentMethods.map((m) => (
            <div
              key={m.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '14px 0',
                borderBottom: '1px solid var(--border)',
                gap: 12,
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div style={{ fontWeight: 600 }}>
                  {m.type} {m.primary && <span className="tag tag-teal" style={{ marginLeft: 8 }}>Primary</span>}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: 14 }}>{m.details}</div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                {!m.primary && (
                  <button type="button" className="btn btn-secondary" onClick={() => setPrimary(m.id)}>
                    Make primary
                  </button>
                )}
                <button type="button" className="btn btn-secondary" onClick={() => removeMethod(m.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button type="button" className="btn btn-primary" style={{ marginTop: 16 }} onClick={() => setSavedMessage('Adding a new payment method is simulated in this demo.')}>
            Add payment method
          </button>
        </div>
      </div>

      {/* Subscription panel */}
      <aside className="subscription-panel">
        <div className="form-card">
          <h3 style={{ marginTop: 0 }}>Subscription</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: 14, marginTop: -8 }}>
            Manage your SMEquity plan and see what each tier includes.
          </p>

          {/* Free plan */}
          <div className={`plan-card ${currentPlan === 'free' ? 'active' : ''}`}>
            <div className="plan-card-header">
              <h4>Free</h4>
              {currentPlan === 'free' ? (
                <span className="status-pill tradeable">Current Plan</span>
              ) : (
                <button type="button" className="btn btn-secondary" onClick={() => setPendingPlan('free')}>
                  Switch
                </button>
              )}
            </div>
            <div className="plan-price">€0 <span>/ forever</span></div>
            <p className="plan-desc">
              Basic access to the platform. Browse active campaigns on the Primary Market, invest
              with a minimum of €250 per campaign, and view your portfolio. No monthly cost.
            </p>
          </div>

          {/* Premium plan */}
          <div className={`plan-card ${currentPlan === 'premium' ? 'active' : ''}`}>
            <div className="plan-card-header">
              <h4>Premium</h4>
              {currentPlan === 'premium' ? (
                <span className="status-pill tradeable">Current Plan</span>
              ) : (
                <button type="button" className="btn btn-primary" onClick={() => setPendingPlan('premium')}>
                  Upgrade
                </button>
              )}
            </div>
            <div className="plan-price">€19.99 <span>/ month</span></div>
            <div className="plan-price-alt">or €179 / year — saves approx. €61 vs. monthly</div>
            <p className="plan-desc">
              Enhanced analytics on your investments, earlier access to
              new campaigns before they open to all investors, priority matching on the Secondary
              Market, and portfolio aggregation tools. Designed for experienced retail and
              semi-professional investors managing diverse SMEquity portfolios.
            </p>
          </div>

          <div className="premium-benefits">
            <h4>Why go Premium?</h4>
            <ul>
              <li>Enhanced analytics</li>
              <li>Early campaign access</li>
              <li>Priority secondary market matching</li>
              <li>Portfolio aggregation tools</li>
            </ul>
          </div>
        </div>
      </aside>
      </div>

      {pendingPlan && (
        <div className="modal-backdrop" onClick={() => setPendingPlan(null)}>
          <div className="modal" style={{ maxWidth: 420, textAlign: 'center' }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setPendingPlan(null)} aria-label="Close">✕</button>
            <h2 style={{ marginTop: 8 }}>
              Are you sure you want to switch to {pendingPlan === 'premium' ? 'Premium' : 'Free'}?
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
              This is a demo platform — no real payment will be processed.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 16, flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={confirmSwitch}>Confirm</button>
              <button className="btn btn-secondary" onClick={() => setPendingPlan(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
