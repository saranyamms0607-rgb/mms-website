import React from 'react'

const posts = [
  {id:1, title: 'Design Systems 101', excerpt: 'How to build a reusable design system for scale.'},
  {id:2, title: 'Branding on a Budget', excerpt: 'Practical steps for early-stage startups.'},
]

export const Blog = () => {
  return (
    <section id="blog" style={{padding: '3rem 1rem', maxWidth: 900}}>
      <h2>From the Studio</h2>
      <p style={{color: 'var(--muted, #ccc)'}}>Insights on design, branding, and product.</p>

      <ul>
        {posts.map(p => (
          <li key={p.id} style={{marginBottom: 8}}>
            <strong>{p.title}</strong>
            <div style={{color: 'var(--muted, #aaa)'}}>{p.excerpt}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}
