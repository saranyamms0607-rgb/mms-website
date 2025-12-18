import React from 'react'

export const BrandManagement = () => {
  return (
    <section id="brand" style={{padding: '3rem 1rem', maxWidth: 900}}>
      <h2>Brand Management</h2>
      <p style={{color: 'var(--muted, #ccc)'}}>
        We help businesses build cohesive brands — from naming and positioning
        to visual systems and launch strategy.
      </p>

      <ul style={{color: 'var(--muted, #ccc)'}}>
        <li>Brand strategy & messaging</li>
        <li>Visual identity & guidelines</li>
        <li>Campaigns & activation</li>
      </ul>

      <div style={{marginTop: 12}}>
        <strong>Case study:</strong> Rebuilt a fintech brand identity that
        increased user signups by 28% in three months.
      </div>
    </section>
  )
}
