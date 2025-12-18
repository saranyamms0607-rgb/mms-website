import React from 'react'

export const Home = () => {
  return (
    <section id="home" style={{padding: '4rem 1rem', maxWidth: 900}}>
      <h1 style={{marginBottom: '.5rem'}}>Welcome to MMS</h1>
      <p style={{marginBottom: '1rem', color: 'var(--muted, #ccc)'}}>
        We craft memorable brands and digital experiences. Explore our services,
        work, and studio — or jump straight to the team and contact options.
      </p>
      <div style={{display: 'flex', gap: 12}}>
        <a href="#about" style={{padding: '0.6rem 1rem', background: '#646cff', color: '#fff', borderRadius: 6}}>About Us</a>
        <a href="#brand" style={{padding: '0.6rem 1rem', border: '1px solid #646cff', borderRadius: 6}}>Our Services</a>
      </div>
    </section>
  )
}
