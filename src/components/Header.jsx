import React from 'react'

export const Header = ({ active = 'home', onNavigate = () => {} }) => {
  const handleClick = (tab) => {
    if (tab === 'all') {
      onNavigate('all')
      return
    }

    // If the landing (all) is active, scroll to the section on the same page
    if (active === 'all') {
      const el = document.getElementById(tab)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }

    // Otherwise switch to the single-tab view
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
        {btn('home', 'Home')}
        {btn('about', 'About Us')}
        {btn('brand', 'Brand Management')}
        {btn('blog', 'Blog')}
        {btn('studio', 'Studio')}
        {btn('contact', 'Contact Us')}
      </nav>
    </header>
  )
}
