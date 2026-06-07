import { Link } from 'react-router-dom'
import HeroCarousel from '../components/HeroCarousel.jsx'
import FaqAccordion from '../components/FaqAccordion.jsx'

const faqItems = [
  {
    question: 'How do I start investing?',
    answer:
      'Create an account on SMEquity, complete identity verification, and browse active campaigns on the Primary Market. The minimum investment per campaign is €250. Once you invest, your stake is structured through a STAK, which means you receive depositary receipts representing your economic interest in the company.',
  },
  {
    question: 'What is the minimum and maximum I can invest?',
    answer:
      'The minimum investment is €250 per campaign. There is no fixed maximum, though platform and regulatory limits may apply depending on your investor profile.',
  },
  {
    question: 'Can I sell my investment before the company exits?',
    answer:
      "Yes. After a mandatory 12-month holding period, you can list your stake for sale on SMEquity's Secondary Market bulletin board. You set your asking price, and existing investors in the same company are notified first and given 10 days to buy before the listing opens to all platform investors. Once a buyer is found, you negotiate through the platform and the transaction settles in the monthly clearing window.",
  },
  {
    question: 'How does the secondary market work?',
    answer:
      "The secondary market is a regulated bulletin board operating under ECSPR Article 25. Sellers list their stakes with an asking price. The platform provides a reference price based on the SME's latest financials and past secondary transactions to help guide negotiations. Once buyer and seller agree on a price, the platform generates the transfer agreement, both parties sign digitally, payment is processed through a secured client money account, and the STAK administrator updates the ownership records. Settlements are grouped into monthly clearing windows in the last 5 business days of each month.",
  },
  {
    question: 'What fees do I pay as an investor?',
    answer:
      'There are no fees to browse or invest through the Primary Market. On the Secondary Market, a transaction fee of 1.5% applies to both the buyer and the seller, making a 3% round-trip cost. This is significantly lower than the effective cost of illiquidity on platforms with no exit option. A Premium subscription is also available at €19.99 per month or €179 per year, giving access to enhanced analytics, earlier campaign access, priority matching on the secondary market, and portfolio aggregation tools.',
  },
  {
    question: 'Are my investments protected?',
    answer:
      'Investments in SMEs are high risk and are not covered by the Dutch Deposit Guarantee Scheme. You may lose your entire investment. Client funds are held in segregated accounts at a licensed banking partner and are never mixed with SMEquity\'s own funds. SMEquity operates under ECSPR supervision by the AFM.',
  },
  {
    question: 'What is a STAK?',
    answer:
      'A Stichting Administratiekantoor is a Dutch legal foundation that holds the actual shares in the SME on behalf of all investors. You receive depositary receipts that carry full economic rights — meaning you benefit from dividends and growth — while the STAK keeps the shareholder register clean and makes transfers between investors simple and low-cost.',
  },
  {
    question: 'Can I invest in stakes from other crowdfunding platforms?',
    answer:
      "Yes. SMEquity's secondary market accepts stakes originally issued on other regulated Dutch equity crowdfunding platforms such as Invesdor or CrowdAboutNow. These holdings go through a security screening in partnership with the originating platform and, once admitted, are treated identically to stakes issued through SMEquity's own primary market.",
  },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner hero-split">
          <div className="hero-text">
            <h1>Equity funding for Dutch SMEs. Real ownership for everyday investors.</h1>
            <p style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 8 }}>
              Invest in Dutch SMEs. Exit when you're ready.
            </p>
            <p>
              SMEquity connects small and medium-sized businesses across the Netherlands with retail
              investors who want to invest in local companies. Unlike existing platforms, SMEquity
              also operates a regulated secondary market, which gives investors the ability to sell
              their shares after the mandatory holding period ends, rather than being permanently
              locked in.
            </p>
            <div className="hero-ctas">
              <Link to="/campaigns" className="btn btn-primary">
                I'm an investor — browse the primary market
              </Link>
              <Link to="/raise-funding" className="btn btn-secondary" style={{ background: 'transparent', color: 'white', borderColor: 'white' }}>
                I'm an SME — raise funding
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <HeroCarousel />
          </div>
        </div>
      </section>

      <section className="section container">
        <h2 className="section-title">How SMEquity works</h2>
        <p className="section-subtitle">
          A simple, transparent path from first investment to eventual exit — built for trust.
        </p>
        <div className="grid-3">
          <div className="card">
            <div className="feature-icon">①</div>
            <h3>Browse vetted SME campaigns</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Explore fundraising campaigns from real-economy Dutch businesses — from bakeries to
              robotics scale-ups — each with clear sector, funding goal and progress information.
            </p>
          </div>
          <div className="card">
            <div className="feature-icon">②</div>
            <h3>Invest from just €250</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Choose a campaign, decide how much to invest, and confirm your stake in a few clicks.
              Track everything in your personal portfolio dashboard.
            </p>
          </div>
          <div className="card">
            <div className="feature-icon">③</div>
            <h3>Resell on the secondary market</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
              After a 12-month lock-up period, list your shares on our bulletin-board secondary
              market and negotiate directly with other investors — something the Dutch market has
              long lacked.
            </p>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Everything you need to know before you invest.</p>
        <FaqAccordion items={faqItems} />
      </section>

      <section className="section container">
        <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <h2 style={{ margin: '0 0 8px' }}>Ready to get started?</h2>
            <p style={{ color: 'var(--text-muted)', margin: 0 }}>
              Browse live campaigns, make your first investment, or check the secondary market for
              opportunities to buy stakes from existing investors.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/campaigns" className="btn btn-primary">Browse primary market</Link>
            <Link to="/secondary-market" className="btn btn-secondary">Visit secondary market</Link>
          </div>
        </div>
      </section>
    </>
  )
}
