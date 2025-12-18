import React from 'react'

export const Studio = () => {
  return (
    <section id="studio" style={{padding: '3rem 1rem', maxWidth: 900}}>
      <h2>Studio</h2>
      <p style={{color: 'var(--muted, #ccc)'}}>
        Our studio brings together designers, strategists, and engineers to
        deliver end-to-end product experiences.
      </p>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12, marginTop: 12}}>
        <div style={{background: '#1a1a1a', padding: 12, borderRadius: 8}}>Project: Mobile App Redesign</div>
        <div style={{background: '#1a1a1a', padding: 12, borderRadius: 8}}>Project: Visual Identity</div>
        <div style={{background: '#1a1a1a', padding: 12, borderRadius: 8}}>Project: Campaign</div>
      </div>
    </section>
  )
}
