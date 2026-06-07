# SMEquity (MVP)

SMEquity is a concept platform for the Dutch market that lets **small and medium-sized
enterprises (SMEs)** raise equity funding directly from **retail investors**, and — uniquely —
lets those investors later **resell their stakes on a secondary market** once a 12-month lock-up
period has passed. A liquid secondary market for private SME equity largely doesn't exist in the
Netherlands today; this MVP demonstrates what such a product could look like.

This repository contains a **front-end-only MVP** with simulated (hardcoded) data — there is no
real backend, payment processing, or user authentication. It exists to demonstrate the product
concept and core user flows.

## Pages & features

- **Homepage** — explains the SMEquity concept and proposition, with calls-to-action for both SMEs
  looking to raise funds and investors looking to participate.
- **SME Campaign Page** (`/campaigns`) — a list of fictional Dutch SME fundraising campaigns,
  each showing company name, sector, location, funding goal, amount raised so far (visualised as a
  progress bar), and a short description.
- **Invest Flow** (`/invest` or `/invest/:campaignId`) — a form where a user selects a campaign,
  enters an investment amount (minimum **€250**), and submits their details. On submission, a
  confirmation screen shows a reference number, the estimated number of shares acquired, and the
  applicable lock-up terms.
- **Secondary Market / Bulletin Board** (`/secondary-market`) — a list of fictional stakes
  currently for sale, showing the company, number of shares, asking price per share and in total,
  and a short note from the seller. A **"Start Negotiation"** button opens a contact/offer form in
  a modal, where a buyer can submit an opening offer and message.
- **Investor Portfolio Dashboard** (`/portfolio`) — a dashboard for a fictional investor showing
  their current holdings, purchase vs. current price, estimated current value and gain/loss, the
  investment date, and whether each holding is still within its 12-month lock-up period or is now
  **tradeable** on the secondary market.

All data (campaigns, secondary-market listings, and the investor's portfolio) is defined in
`src/data/` as plain JavaScript modules — there is no database or API call involved. Form
submissions ("invest", "send offer") are simulated entirely in the browser and simply produce a
confirmation screen; nothing is persisted or sent anywhere.

## Technologies used

- **React 18** (functional components + hooks)
- **React Router 6** for client-side routing between pages
- **Vite** as the build tool / dev server
- Plain **CSS** (no UI framework) for a clean, professional, "trustworthy fintech" look

## Project structure

```
smequity/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx              # App entry point, router setup
│   ├── App.jsx               # Route definitions
│   ├── index.css             # Global styles (design system, layout, components)
│   ├── components/
│   │   ├── Layout.jsx        # Shared header/footer/navigation
│   │   └── CampaignCard.jsx  # Reusable campaign summary card
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Campaigns.jsx
│   │   ├── Invest.jsx
│   │   ├── SecondaryMarket.jsx
│   │   └── Portfolio.jsx
│   ├── data/
│   │   ├── campaigns.js      # Fictional Dutch SME fundraising campaigns
│   │   ├── listings.js       # Fictional secondary-market stake listings
│   │   └── portfolio.js      # Fictional investor + holdings, lock-up logic
│   └── utils/
│       └── format.js         # Currency / date formatting helpers (nl-NL locale)
└── README.md
```
## Interacting with the Demo Environment
To interact with the demo environment presented in the video, open the 'Functional Demo.html' document in your browser. The simulated login details are:

Email: janedoe@gmail.com

Password: XYZ@24

## Running the project locally

You'll need [Node.js](https://nodejs.org/) (v18 or later) and npm installed.

```bash
# 1. Install dependencies
cd smequity
npm install

# 2. Start the development server
npm run dev
```

Then open the URL shown in the terminal (typically `http://localhost:5173`) in your browser.

To create a production build:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Notes on the data & assumptions

- All companies, sectors, amounts, listings, and the investor profile are **entirely fictional**
  but designed to feel realistic for the Dutch SME landscape (e.g. a bakery in Haarlem, a robotics
  scale-up in Eindhoven, a renewable-energy cooperative in Utrecht).
- The **minimum investment amount** is set at **€250**, as specified.
- The **lock-up period** is fixed at **12 months** from the investment date; the dashboard
  computes, for each holding, whether that period has elapsed and is therefore tradeable.
- "Today's date" used for lock-up calculations is the visitor's current system date.

## Disclaimer

This is a demo / prototype only. No real financial transactions, regulatory processes, or
investor protections are implemented. It should not be used as the basis for real investment
decisions.
