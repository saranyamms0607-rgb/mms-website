import React from 'react'

export const Studio = () => {
  return (
    <section id="studio" style={{padding: '3rem 1rem', maxWidth: 900}}>
      <h2>Studio</h2>
      <p style={{color: 'var(--muted, #ccc)'}}>
        Our studio brings together designers, strategists, and engineers to
        deliver end-to-end product experiences.
      </p>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 12}}>
        <div style={{
          background: 'var(--bg)',
          color: 'var(--text)',
          padding: 16,
          borderRadius: 12,
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          border: '1px solid rgba(255,255,255,0.1)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.target.style.transform = 'translateY(-4px)'}
        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
        >Project: Mobile App Redesign</div>
        <div style={{
          background: 'var(--bg)',
          color: 'var(--text)',
          padding: 16,
          borderRadius: 12,
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          border: '1px solid rgba(255,255,255,0.1)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.target.style.transform = 'translateY(-4px)'}
        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
        >Project: Visual Identity</div>
        <div style={{
          background: 'var(--bg)',
          color: 'var(--text)',
          padding: 16,
          borderRadius: 12,
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          border: '1px solid rgba(255,255,255,0.1)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.target.style.transform = 'translateY(-4px)'}
        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
        >Project: Campaign</div>
      </div>
    </section>
  )
}
