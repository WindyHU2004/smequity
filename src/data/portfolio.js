// Fictional investor: "Jan de Vries". Lock-up period is 12 months from investment date.
export const investor = {
  name: 'Jan de Vries',
  email: 'jan.devries@example.com',
  memberSince: '2024-03-12',
}

export const holdings = [
  {
    id: 'h1',
    company: 'DeltaTech Robotics',
    sector: 'Technology / Robotics',
    shares: 40,
    purchasePrice: 50,
    currentPrice: 63,
    referencePrice: 61,
    investedOn: '2024-11-02',
  },
  {
    id: 'h2',
    company: 'Bakkerij De Korenaar',
    sector: 'Food & Beverage',
    shares: 25,
    purchasePrice: 20,
    currentPrice: 22,
    referencePrice: 22,
    investedOn: '2025-01-20',
  },
  {
    id: 'h3',
    company: 'Groene Stroom Coöperatie',
    sector: 'Renewable Energy',
    shares: 60,
    purchasePrice: 25,
    currentPrice: 31,
    referencePrice: 30,
    investedOn: '2025-09-15',
  },
  {
    id: 'h4',
    company: 'Amsterdam Bike Works',
    sector: 'Manufacturing / Mobility',
    shares: 15,
    purchasePrice: 30,
    currentPrice: 35,
    referencePrice: 34,
    investedOn: '2026-02-28',
  },
]

export const LOCKUP_MONTHS = 12

export function isTradeable(investedOn, today = new Date()) {
  const invested = new Date(investedOn)
  const unlockDate = new Date(invested)
  unlockDate.setMonth(unlockDate.getMonth() + LOCKUP_MONTHS)
  return today >= unlockDate
}

export function unlockDateOf(investedOn) {
  const invested = new Date(investedOn)
  const unlockDate = new Date(invested)
  unlockDate.setMonth(unlockDate.getMonth() + LOCKUP_MONTHS)
  return unlockDate
}
