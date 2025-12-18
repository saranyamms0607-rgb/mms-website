import React from 'react'

export const ContactUs = () => {
  return (
    <section id="contact" style={{padding: '3rem 1rem', maxWidth: 800}}>
      <h2>Contact Us</h2>
      <p style={{color: 'var(--muted, #ccc)'}}>
        Interested in working together? Send us a message and we'll get back to
        you within a few business days.
      </p>

      <form style={{display: 'grid', gap: 8, marginTop: 12}} onSubmit={(e)=>e.preventDefault()}>
        <input placeholder="Your name" style={{padding: 8, borderRadius: 6}} />
        <input placeholder="Email" style={{padding: 8, borderRadius: 6}} />
        <textarea placeholder="Message" rows={5} style={{padding: 8, borderRadius: 6}} />
        <button type="submit" style={{padding: '0.6rem 1rem', width: 120}}>Send</button>
      </form>
    </section>
  )
}
