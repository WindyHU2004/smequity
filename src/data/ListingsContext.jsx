import { createContext, useContext, useState } from 'react'
import { listings as initialListings } from './listings.js'
import { investor } from './portfolio.js'

const ListingsContext = createContext(null)

export function ListingsProvider({ children }) {
  const [listings, setListings] = useState(initialListings)

  function addListing({ company, sector, shares, pricePerShare, reason, referencePrice }) {
    const newListing = {
      id: `l${Date.now()}`,
      company,
      sector,
      seller: investor.name,
      shares,
      askingPricePerShare: pricePerShare,
      referencePrice,
      referencePeriod: 'based on financials and recent secondary trades',
      listedOn: new Date().toISOString().slice(0, 10),
      note: reason?.trim() || 'Listed via the SMEquity portfolio dashboard.',
    }
    setListings((prev) => [newListing, ...prev])
    return newListing
  }

  return (
    <ListingsContext.Provider value={{ listings, addListing }}>
      {children}
    </ListingsContext.Provider>
  )
}

export function useListings() {
  return useContext(ListingsContext)
}
