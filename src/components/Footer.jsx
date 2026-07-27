import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-cream-50 text-ink-900 py-10 border-t border-ink-900/10">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold">Naveen Kumar</h3>
            <p className="text-ink-700/60 text-sm mt-1">Software Engineer · React.js · Node.js · Python</p>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/naveenkr1/" target="_blank" rel="noopener noreferrer" className="text-ink-700/60 hover:text-clay-600 transition-colors text-lg">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Ojhanaveen" target="_blank" rel="noopener noreferrer" className="text-ink-700/60 hover:text-clay-600 transition-colors text-lg">
              <FaGithub />
            </a>
            <a href="mailto:nk9411123@gmail.com" className="text-ink-700/60 hover:text-clay-600 transition-colors text-lg">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="border-t border-ink-900/10 mt-6 pt-6 text-center">
          <p className="text-ink-700/40 text-sm">
            &copy; {new Date().getFullYear()} Naveen Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
