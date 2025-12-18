import React from 'react'
import { Home } from '../Taps/Home'
import { AboutUs } from '../Taps/AboutUs'
import { BrandManagement } from '../Taps/BrandManagement'
import { Blog } from '../Taps/Blog'
import { Studio } from '../Taps/Studio'
import { ContactUs } from '../Taps/ContactUs'

export const Root = () => {
  return (
    <main>
      <Home />
      <AboutUs />
      <BrandManagement />
      <Blog />
      <Studio />
      <ContactUs/>
    </main>
  )
}
