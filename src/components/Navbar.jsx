import React, { useEffect, useRef, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { gsap } from '../utils/gsapConfig'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#project', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    )
  }, [])

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream-50/80 backdrop-blur-xl border-b border-ink-900/10 shadow-lg shadow-ink-900/5' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-16 lg:px-24 flex justify-between items-center py-4">
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-ink-900 cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          Naveen<span className="text-transparent bg-clip-text bg-gradient-to-r from-clay-500 to-clay-700">.dev</span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-ink-700/80 hover:text-ink-900 transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-gradient-to-r from-clay-500 to-clay-700 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-ink-900 text-xl"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-cream-50/95 backdrop-blur-xl border-t border-ink-900/10 px-6 py-6 flex flex-col space-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-ink-700/80 hover:text-ink-900 text-base font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
