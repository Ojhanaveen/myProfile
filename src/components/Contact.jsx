import React, { useRef, useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Contact = () => {
  const form = useRef()
  const containerRef = useScrollReveal()
  const [status, setStatus] = useState('idle')

  const handleSendClick = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus('sent')
          form.current.reset()
          setTimeout(() => setStatus('idle'), 4000)
        },
        () => {
          setStatus('error')
          setTimeout(() => setStatus('idle'), 4000)
        }
      )
  }

  return (
    <div className="bg-cream-50 text-ink-900 py-24" id="contact" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <h2 className="reveal-up text-4xl font-bold text-center mb-16">
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-clay-500 to-clay-700">Touch</span>
        </h2>
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="reveal-up flex-1">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-clay-500 to-clay-700 mb-4">
              Let's Talk
            </h3>
            <p className="text-ink-700/80 mb-8">
              I'm open to discussing software engineering roles, web development projects, or
              partnership opportunities.
            </p>
            <div className="space-y-4">
              <a href="mailto:nk9411123@gmail.com" className="flex items-center gap-3 text-ink-700/80 hover:text-clay-600 transition-colors">
                <span className="w-9 h-9 rounded-full bg-ink-900/5 border border-ink-900/10 flex items-center justify-center text-clay-600">
                  <FaEnvelope />
                </span>
                nk9411123@gmail.com
              </a>
              <a href="tel:+917319831666" className="flex items-center gap-3 text-ink-700/80 hover:text-clay-600 transition-colors">
                <span className="w-9 h-9 rounded-full bg-ink-900/5 border border-ink-900/10 flex items-center justify-center text-clay-600">
                  <FaPhone />
                </span>
                +91 7319831666
              </a>
              <div className="flex items-center gap-3 text-ink-700/80">
                <span className="w-9 h-9 rounded-full bg-ink-900/5 border border-ink-900/10 flex items-center justify-center text-clay-600">
                  <FaMapMarkerAlt />
                </span>
                Navi Mumbai, Maharashtra
              </div>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://github.com/Ojhanaveen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-ink-900/5 border border-ink-900/10 flex items-center justify-center text-xl transition-all duration-300 hover:border-clay-500/40 hover:-translate-y-1"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/naveenkr1/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-ink-900/5 border border-ink-900/10 flex items-center justify-center text-xl transition-all duration-300 hover:border-clay-500/40 hover:-translate-y-1"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="reveal-up flex-1 w-full">
            <form ref={form} onSubmit={handleSendClick} className="space-y-4 rounded-2xl border border-ink-900/10 bg-ink-900/5 backdrop-blur-sm p-6">
              <div>
                <label htmlFor="user_name" className="block mb-2 text-sm text-ink-700/80">Your Name</label>
                <input
                  id="user_name"
                  type="text"
                  name="user_name"
                  className="w-full p-3 rounded-lg bg-cream-50 border border-ink-900/10 focus:outline-none focus:border-clay-500 transition-colors"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="user_email" className="block mb-2 text-sm text-ink-700/80">Email</label>
                <input
                  id="user_email"
                  type="email"
                  name="user_email"
                  className="w-full p-3 rounded-lg bg-cream-50 border border-ink-900/10 focus:outline-none focus:border-clay-500 transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm text-ink-700/80">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-3 rounded-lg bg-cream-50 border border-ink-900/10 focus:outline-none focus:border-clay-500 transition-colors"
                  rows="5"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-gradient-to-r from-clay-500 to-clay-600 text-cream-50 font-semibold transition-transform duration-300 hover:scale-[1.02] px-8 py-3 rounded-full disabled:opacity-60 disabled:hover:scale-100"
              >
                {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message Sent ✓' : status === 'error' ? 'Failed — Try Again' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
