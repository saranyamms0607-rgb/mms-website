
import './App.css'
import React, { useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { AboutUs } from './Taps/AboutUs'
import { Blog } from './Taps/Blog'
import { BrandManagement } from './Taps/BrandManagement'
import { Home } from './Taps/Home'
import { Studio } from './Taps/Studio'
import { Root } from './components/Root'
import { ContactUs } from './Taps/ContactUs'

function App() {
  const [active, setActive] = useState('home')

  return (
    <>
      <Header active={active} onNavigate={setActive} />

      <div className="page">
        {active === 'home' && <Root />}
        {active === 'about' && <AboutUs />}
        {active === 'brand' && <BrandManagement />}
        {active === 'blog' && <Blog />}
        {active === 'studio' && <Studio />}
        {active === 'contact' && <ContactUs />}
      </div>

      <Footer />
    </>
  )
}

export default App
