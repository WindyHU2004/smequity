import { campaigns } from '../data/campaigns.js'
import CampaignCard from '../components/CampaignCard.jsx'

export default function Campaigns() {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Primary Market — Active SME Campaigns</h1>
        <p>
          Browse fundraising campaigns from Dutch small and medium-sized businesses. Each campaign
          shows the sector, funding goal, progress so far, and a brief description so you can
          decide where to invest.
        </p>
      </div>

      <div className="campaign-grid" style={{ marginTop: 32 }}>
        {campaigns.map((c) => (
          <CampaignCard key={c.id} campaign={c} />
        ))}
      </div>
    </div>
  )
}
