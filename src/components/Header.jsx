import React from 'react'

export const Header = ({ active = 'home', onNavigate = () => {} }) => {
  const handleClick = (tab) => {
    // Clicking Home should always go to the landing home view
    if (tab === 'home') {
      onNavigate('home')
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
