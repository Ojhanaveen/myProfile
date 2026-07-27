import React, { useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { gsap } from '../utils/gsapConfig'
import ParticleField from '../three/ParticleField'
import HeroImage from '../assets/Myicon-removebg-preview-removebg-preview.png'

const Hero = () => {
  const rootRef = useRef(null)

  useEffect(() => {
    if (!rootRef.current) return

    const q = gsap.utils.selector(rootRef)
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(q('.hero-avatar'), { scale: 0.7, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, overwrite: true })
      .fromTo(q('.hero-eyebrow'), { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, overwrite: true }, '-=0.4')
      .fromTo(q('.hero-title'), { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, overwrite: true }, '-=0.3')
      .fromTo(q('.hero-sub'), { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, overwrite: true }, '-=0.4')
      .fromTo(q('.hero-cta'), { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, overwrite: true }, '-=0.3')
      .fromTo(q('.hero-social'), { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, overwrite: true }, '-=0.3')

    return () => tl.kill()
  }, [])

  const handleResumeClick = () => {
    window.open('/Naveen__Kumar_.pdf', '_blank')
  }

  return (
    <div
      ref={rootRef}
      id="home"
      className="relative z-0 min-h-screen flex items-center justify-center bg-cream-50 text-ink-900 overflow-hidden pt-24 pb-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50/30 via-transparent to-cream-50 -z-20" />
      <ParticleField />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <img
          src={HeroImage}
          alt="Naveen Kumar"
          className="hero-avatar mx-auto mb-8 w-40 h-40 md:w-48 md:h-48 rounded-full object-cover ring-2 ring-clay-500/40 shadow-[0_0_60px_-10px_rgba(217,119,87,0.4)]"
        />

        <p className="hero-eyebrow uppercase tracking-[0.3em] text-xs md:text-sm text-clay-600 font-medium mb-4">
          Software Engineer
        </p>

        <h1 className="hero-title text-4xl md:text-6xl font-bold leading-tight text-ink-900">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-clay-500 via-clay-600 to-clay-700">
            Naveen Kumar
          </span>
        </h1>

        <p className="hero-sub mt-6 max-w-2xl mx-auto text-base md:text-lg text-ink-700/80">
          I build scalable web applications with React.js, Node.js and Python — with a strong
          focus on REST API reliability, debugging, and shipping production-ready systems.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#project"
            className="hero-cta bg-gradient-to-r from-clay-500 to-clay-600 text-cream-50 font-semibold px-6 py-2.5 rounded-full transition-transform duration-300 hover:scale-105 shadow-lg shadow-clay-500/25"
          >
            View Projects
          </a>
          <button
            onClick={handleResumeClick}
            className="hero-cta border border-ink-900/15 text-ink-900 px-6 py-2.5 rounded-full backdrop-blur-sm bg-ink-900/5 transition-all duration-300 hover:scale-105 hover:bg-ink-900/10"
          >
            Download Resume
          </button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 text-xl text-ink-700/60">
          <a href="https://github.com/Ojhanaveen" target="_blank" rel="noopener noreferrer" className="hero-social hover:text-clay-600 transition-colors duration-300 hover:scale-110 inline-block">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/naveenkr1/" target="_blank" rel="noopener noreferrer" className="hero-social hover:text-clay-600 transition-colors duration-300 hover:scale-110 inline-block">
            <FaLinkedin />
          </a>
          <a href="mailto:nk9411123@gmail.com" className="hero-social hover:text-clay-600 transition-colors duration-300 hover:scale-110 inline-block">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
