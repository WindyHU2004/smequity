import { Outlet, NavLink } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext.jsx'

export default function Layout() {
  const { isLoggedIn } = useAuth()

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <NavLink to="/" className="logo">
            SM<span>Equity</span>
          </NavLink>
          <nav className="nav">
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
            <NavLink to="/campaigns" className={({ isActive }) => (isActive ? 'active' : '')}>
              Primary Market
            </NavLink>
            <NavLink to="/secondary-market" className={({ isActive }) => (isActive ? 'active' : '')}>
              Secondary Market
            </NavLink>
            <NavLink to="/raise-funding" className={({ isActive }) => (isActive ? 'active' : '')}>
              Raise Funding
            </NavLink>
            {isLoggedIn ? (
              <>
                <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>
                  My Portfolio
                </NavLink>
                <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : '')}>
                  My Profile
                </NavLink>
              </>
            ) : (
              <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>
                Log In
              </NavLink>
            )}
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <strong>SMEquity</strong> — Equity crowdfunding &amp; secondary trading for Dutch SMEs.
          </div>
          <div>This is a demo MVP with simulated data. No real investments are made here.</div>
        </div>
        <div className="disclaimer-ribbon">
          SMEquity operates as a crowdfunding service provider under the European Crowdfunding
          Service Provider Regulation (ECSPR), supervised by the AFM (Autoriteit Financiële
          Markten). Secondary market activity is conducted under ECSPR Article 25 bulletin board
          permission. Client funds are held in segregated accounts at a licensed banking partner
          and are not covered by the Dutch Deposit Guarantee Scheme (DGS). Investing in
          early-stage SMEs carries significant risk, including the potential loss of your entire
          investment. Past performance is not indicative of future results. SMEquity BV is not a
          bank or licensed investment firm.
        </div>
      </footer>
    </>
  )
}
