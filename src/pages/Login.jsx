import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext.jsx'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (login(email, password)) {
      setError('')
      navigate('/')
    } else {
      setError('Invalid email or password. Try the demo credentials shown below.')
    }
  }

  return (
    <div className="container">
      <div className="page-header">
        <h1>Log in to SMEquity</h1>
        <p>Access your investor account to view your portfolio and manage your holdings.</p>
      </div>

      <div className="section" style={{ paddingTop: 16 }}>
        <form className="form-card" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="janedoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <div className="error-text">{error}</div>}

          <button type="submit" className="btn btn-primary btn-block">Log in</button>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 14, marginTop: 16, marginBottom: 0 }}>
            New to SMEquity? <Link to="/campaigns">Browse the primary market</Link> to get started.
          </p>
        </form>
      </div>
    </div>
  )
}
