const steps = [
  {
    title: 'Initial call',
    description:
      'SMEquity schedules an introductory call with the founding team to understand the business and assess fit.',
  },
  {
    title: 'Due diligence',
    description:
      'The platform reviews business history, identity verification, third-party credit assessment, and analyses cash flow using PSD2 open banking data with the company\'s consent.',
  },
  {
    title: 'Campaign preparation',
    description:
      'SMEquity helps the SME prepare a standardised Key Investment Information Sheet (KIIS) and campaign page.',
  },
  {
    title: 'Campaign goes live',
    description:
      'The campaign runs for up to 90 days, with a minimum investment of €250 per investor and a maximum raise of €5 million per 10-month period.',
  },
  {
    title: 'Funding closes',
    description:
      'If the target is met, funds are transferred and investor stakes are structured through a STAK (Stichting Administratiekantoor) for clean ownership administration.',
  },
  {
    title: 'Secondary market access',
    description:
      'After a mandatory 12-month holding period, investors can list their stakes for sale on SMEquity\'s secondary market.',
  },
]

export default function ProcessTimeline() {
  return (
    <div className="timeline">
      {steps.map((step, i) => (
        <div className="timeline-step" key={step.title}>
          <div className="timeline-marker">
            <div className="timeline-number">{i + 1}</div>
            {i < steps.length - 1 && <div className="timeline-line" />}
          </div>
          <div className="timeline-content">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
