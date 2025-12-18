import React from 'react'

export const Header = ({ active = 'home', onNavigate = () => {} }) => {
  const handleClick = (tab) => {
    // Clicking Home always navigates to the landing and scrolls to top
    if (tab === 'home') {
      onNavigate('home')
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 60)
      return
    }

    // If the landing (home) is active, scroll to the section on the same page
    if (active === 'home') {
      const el = document.getElementById(tab)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }

    // If landing is not active, first switch back to landing then scroll
    if (active !== 'home') {
      onNavigate('home')
      // wait for landing to render then scroll
      setTimeout(() => {
        const el = document.getElementById(tab)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
      return
    }

    // Fallback: switch to the single-tab view
    onNavigate(tab)
  }

  const btn = (tab, label) => (
    <button
      onClick={() => handleClick(tab)}
      style={{
        marginRight: 12,
        background: 'transparent',
        border: 'none',
        color: 'inherit',
        cursor: 'pointer',
        fontWeight: active === tab ? 700 : 500,
      }}
    >
      {label}
    </button>
  )

  return (
    <header className="site-header">
      <nav style={{ padding: '1rem', display: 'flex', gap: 6 }}>
        {/* {btn('all', 'All')} */}
        {btn('home', 'Home')}
        {btn('about', 'About ')}
        {btn('brand', 'Brand')}
        {btn('blog', 'Blog')}
        {btn('studio', 'Studio')}
        {btn('contact', 'Contact Us')}
      </nav>
    </header>
  )
}
