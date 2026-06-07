export const campaigns = [
  {
    id: 'c1',
    name: 'Groene Stroom Coöperatie',
    sector: 'Renewable Energy',
    location: 'Utrecht',
    sought: 500000,
    raised: 372500,
    minInvestment: 250,
    sharePrice: 25,
    description:
      'A community-owned solar and wind energy cooperative bringing affordable green power to households across the Utrecht region.',
    brief: {
      tagline: 'Locally owned green energy, for the people who live there.',
      problem:
        'Dutch households face rising energy bills and want to switch to renewable power, but installing solar panels or accessing wind energy directly is expensive, complex, and often impossible for renters or apartment dwellers.',
      solution:
        'Groene Stroom Coöperatie builds and operates community-owned solar parks and small wind installations, then sells the electricity generated directly to local member-households at transparent, below-market rates — no middleman energy giants involved.',
      businessModel:
        'Revenue comes from long-term energy supply contracts with member-households and from feed-in payments for surplus electricity sold back to the grid. Members pay a small annual cooperative fee, and profits are reinvested into new installations or returned to members as dividends.',
      traction:
        'Currently operates 3 solar parks and 1 wind turbine supplying over 2,800 households, with annual revenue of approximately €1.1 million and 22% year-on-year growth in connected households over the past two years.',
      useOfFunds:
        'Funds raised will finance the construction of two new solar parks near Houten and Veenendaal, expected to double generation capacity and bring an additional 2,500 households onto the network within 18 months.',
      risks:
        'Key risks include delays in municipal permitting for new installations, fluctuations in wholesale energy prices affecting feed-in revenue, and changes to Dutch subsidy schemes (such as SDE++) that currently support renewable energy projects.',
      team: [
        { name: 'Willem Hoekstra', role: 'Co-founder & Managing Director — 14 years in renewable energy project development' },
        { name: 'Annemiek de Groot', role: 'Co-founder & Operations Lead — former sustainability advisor to the Province of Utrecht' },
        { name: 'Bram Scholten', role: 'Chief Engineer — solar and wind installation specialist, HU University of Applied Sciences' },
      ],
    },
  },
  {
    id: 'c2',
    name: 'Bakkerij De Korenaar',
    sector: 'Food & Beverage',
    location: 'Haarlem',
    sought: 150000,
    raised: 98000,
    minInvestment: 250,
    sharePrice: 20,
    description:
      'A beloved artisan bakery chain expanding from two stores to a regional network, using traditional Dutch recipes and locally sourced grain.',
    brief: {
      tagline: 'Traditional Dutch baking, scaled with care.',
      problem:
        'Demand for high-quality, traditionally made bread and pastries is growing in the Haarlem region, but most local bakeries lack the capital and operational systems to expand beyond a single shop without losing their artisanal quality.',
      solution:
        'Bakkerij De Korenaar has spent eight years perfecting recipes, supplier relationships, and in-store processes in its two flagship stores, and is now ready to replicate that proven formula in three new locations across Kennemerland using a central production kitchen.',
      businessModel:
        'Revenue is generated through direct retail sales in company-owned stores, plus a growing wholesale line supplying bread and pastries to local hotels, cafés, and restaurants. Gross margins are supported by direct relationships with regional grain millers.',
      traction:
        'The two existing stores generated combined revenue of €640,000 last year, up 18% from the year before, and the wholesale line now supplies 24 hospitality businesses across the region, contributing 30% of total revenue.',
      useOfFunds:
        'Capital will be used to fit out three new store locations, build a shared central production kitchen in Haarlem-Noord, and hire and train additional bakery staff ahead of the planned 2027 regional rollout.',
      risks:
        'Key risks include rising costs of flour, butter, and energy, competition from supermarket bakery counters, and the operational challenge of maintaining product quality and consistency while scaling beyond the founder-led model.',
      team: [
        { name: 'Maaike Verhoeven', role: 'Founder & Head Baker — trained at the Richemont Bakery School in Lucerne' },
        { name: 'Joost Brouwer', role: 'Co-owner & Commercial Director — former regional manager at a Dutch retail bakery chain' },
        { name: 'Esmée Kuiper', role: 'Operations Manager — oversees supply chain and the new central kitchen build-out' },
      ],
    },
  },
  {
    id: 'c3',
    name: 'DeltaTech Robotics',
    sector: 'Technology / Robotics',
    location: 'Eindhoven',
    sought: 1200000,
    raised: 845000,
    minInvestment: 250,
    sharePrice: 50,
    description:
      'An Eindhoven-based robotics scale-up building autonomous warehouse logistics systems for European e-commerce fulfilment centres.',
    brief: {
      tagline: 'Autonomous robots that keep European warehouses moving.',
      problem:
        'E-commerce fulfilment centres across Europe face chronic labour shortages and rising wage costs, while customer expectations for next-day delivery keep increasing — leaving warehouse operators struggling to move goods quickly and accurately enough.',
      solution:
        'DeltaTech Robotics designs and manufactures autonomous mobile robots (AMRs) that navigate warehouse floors, transport goods between picking and packing stations, and integrate directly with existing warehouse management software — cutting manual walking time by up to 70%.',
      businessModel:
        'Revenue comes from a combination of upfront robot sales/leases and recurring software-and-maintenance subscriptions (a "Robots-as-a-Service" model), giving the company a growing base of predictable, recurring income alongside hardware sales.',
      traction:
        'DeltaTech has deployed 64 robots across 9 fulfilment centres in the Netherlands, Belgium, and Germany, generating €2.4 million in revenue last year (140% growth), with signed contracts for a further 40-robot rollout in early 2027.',
      useOfFunds:
        'Funds will be used to scale manufacturing capacity at the Eindhoven facility, expand the engineering team, and fund the sales push into the French and Nordic logistics markets identified as the next growth frontier.',
      risks:
        'Key risks include intense competition from larger international robotics players, dependency on a small number of large fulfilment-centre customers, and potential delays or cost overruns in scaling hardware production.',
      team: [
        { name: 'Sven van Dijk', role: 'Co-founder & CEO — former robotics researcher at TU Eindhoven' },
        { name: 'Lotte Mulder', role: 'Co-founder & CTO — ten years building automation systems for the automotive industry' },
        { name: 'Daan Pietersen', role: 'VP of Sales — previously led DACH expansion for a European logistics-tech scale-up' },
      ],
    },
  },
  {
    id: 'c4',
    name: 'Polderfresh Groenteboerderij',
    sector: 'Agriculture / AgriTech',
    location: 'Flevoland',
    sought: 350000,
    raised: 140000,
    minInvestment: 250,
    sharePrice: 25,
    description:
      'A vertical-farming venture in the Flevopolder producing pesticide-free vegetables for supermarkets, cutting transport emissions by 60%.',
    brief: {
      tagline: 'Fresh, pesticide-free vegetables grown closer to the consumer.',
      problem:
        'Dutch supermarkets import large volumes of leafy greens and herbs from southern Europe, resulting in long transport times, high carbon emissions, and produce that has often lost freshness and nutritional value by the time it reaches shelves.',
      solution:
        'Polderfresh operates climate-controlled vertical farms in the Flevopolder that grow pesticide-free lettuces, herbs, and leafy greens year-round, located within 90 minutes of major Dutch distribution centres — delivering fresher produce with a dramatically smaller carbon footprint.',
      businessModel:
        'Revenue is earned through direct supply contracts with national supermarket chains and regional grocers, supplemented by a smaller direct-to-restaurant delivery service that commands premium pricing for same-day-harvested produce.',
      traction:
        'Polderfresh now supplies 3 regional supermarket chains and 35 restaurants, generating €420,000 in revenue in its first full year of commercial operation, with current production capacity sold out through the next two quarters.',
      useOfFunds:
        'Capital will fund the construction of a second growing facility, double current production capacity, and add cold-storage and logistics infrastructure needed to fulfil newly negotiated national distribution contracts.',
      risks:
        'Key risks include high energy costs associated with climate-controlled growing, the capital intensity of building new facilities, and the need to secure additional long-term retail contracts to absorb increased production capacity.',
      team: [
        { name: 'Tessa van der Berg', role: 'Founder & CEO — agronomist and former product manager at a Dutch greenhouse technology firm' },
        { name: 'Niels Kramer', role: 'Co-founder & Head of Operations — manages day-to-day farm operations and logistics' },
        { name: 'Fenna de Jong', role: 'Commercial Director — built the current supermarket and restaurant distribution network' },
      ],
    },
  },
  {
    id: 'c5',
    name: 'Amsterdam Bike Works',
    sector: 'Manufacturing / Mobility',
    location: 'Amsterdam',
    sought: 400000,
    raised: 401000,
    minInvestment: 250,
    sharePrice: 30,
    description:
      'A premium e-bike manufacturer building cargo and city bikes in-house in Amsterdam-Noord, with a growing export business to Germany and France.',
    brief: {
      tagline: 'Premium e-bikes, designed and built in Amsterdam.',
      problem:
        'European cities are rapidly shifting away from cars, but many e-bikes on the market are either mass-produced low-quality imports or expensive boutique products with long waiting lists and limited after-sales support.',
      solution:
        'Amsterdam Bike Works designs and manufactures premium electric cargo and city bikes in-house in Amsterdam-Noord, combining Dutch design heritage with modern componentry, and backs every bike with a nationwide service network.',
      businessModel:
        'Revenue is generated through direct-to-consumer sales via the company\'s showroom and webshop, B2B sales to logistics and delivery companies converting to e-cargo fleets, and a growing export business through dealer partners in Germany and France.',
      traction:
        'The company sold over 1,800 bikes last year for €3.1 million in revenue (35% growth), and export sales to Germany and France now account for 28% of total revenue, supported by 12 active dealer partnerships.',
      useOfFunds:
        'Funds will be used to expand the Amsterdam-Noord production facility, increase manufacturing capacity to meet a growing order backlog, and fund further dealer expansion across the German and French markets.',
      risks:
        'Key risks include global supply-chain pressure on battery and motor components, currency exposure from international sales, and increasing competition from both budget e-bike importers and established European cycling brands.',
      team: [
        { name: 'Pieter Dekker', role: 'Founder & CEO — industrial designer with a background in Dutch bicycle manufacturing' },
        { name: 'Sanne Visser', role: 'Co-founder & Head of Production — oversees the in-house Amsterdam-Noord workshop' },
        { name: 'Mark Jansen', role: 'Export Director — built and manages the German and French dealer network' },
      ],
    },
  },
  {
    id: 'c6',
    name: 'ZorgConnect',
    sector: 'HealthTech',
    location: 'Rotterdam',
    sought: 600000,
    raised: 210000,
    minInvestment: 250,
    sharePrice: 40,
    description:
      'A digital platform connecting independent home-care nurses with patients, reducing administrative overhead for small care providers.',
    brief: {
      tagline: 'Smarter matching between home-care nurses and the patients who need them.',
      problem:
        'The Netherlands faces a growing shortage of home-care nurses, while small independent care providers and freelance nurses lose substantial time to manual scheduling, paperwork, and compliance administration that pulls them away from patient care.',
      solution:
        'ZorgConnect is a digital platform that matches independent home-care nurses with patients based on location, required care type, and availability, while automating scheduling, reporting, and compliance documentation required under Dutch healthcare regulation.',
      businessModel:
        'Revenue is earned through a monthly subscription fee charged to small care organisations and independent nurses for platform access, plus a small transaction fee on completed care assignments booked through the platform.',
      traction:
        'ZorgConnect is now used by 410 independent nurses and 28 small care organisations across the Rotterdam-The Hague region, processing over 3,000 care assignments per month and generating €380,000 in annualised recurring revenue.',
      useOfFunds:
        'Capital will be used to expand the engineering team to accelerate platform development, fund a sales push into the Utrecht and Amsterdam regions, and obtain additional healthcare-data compliance certifications required for national scaling.',
      risks:
        'Key risks include the regulatory complexity of handling sensitive patient data under Dutch and EU healthcare law, dependency on continued growth in the freelance nursing market, and competition from larger national care-coordination platforms.',
      team: [
        { name: 'Femke Bakker', role: 'Co-founder & CEO — former policy advisor at a regional Dutch healthcare authority' },
        { name: 'Ruben de Wit', role: 'Co-founder & CTO — health-tech software engineer with experience at two Dutch e-health start-ups' },
        { name: 'Carlijn Mol', role: 'Head of Care Operations — registered nurse and former home-care team coordinator' },
      ],
    },
  },
]

export function getCampaignById(id) {
  return campaigns.find((c) => c.id === id)
}
