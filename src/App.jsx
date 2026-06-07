import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Campaigns from './pages/Campaigns.jsx'
import RaiseFunding from './pages/RaiseFunding.jsx'
import Invest from './pages/Invest.jsx'
import SecondaryMarket from './pages/SecondaryMarket.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/raise-funding" element={<RaiseFunding />} />
        <Route path="/invest/:campaignId" element={<Invest />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/secondary-market" element={<SecondaryMarket />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  )
}
