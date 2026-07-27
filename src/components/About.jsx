import React from 'react'
import AboutImage from '../assets/MYICONSVG.svg'
import { useScrollReveal } from '../hooks/useScrollReveal'

const stats = [
  { value: '3', label: 'Roles Completed' },
  { value: '4+', label: 'Major Projects' },
  { value: '40%', label: 'Accuracy Gain Delivered' },
]

const About = () => {
  const containerRef = useScrollReveal()

  return (
    <div className="bg-cream-50 text-ink-900 py-24" id="about" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <h2 className="reveal-up text-4xl font-bold text-center mb-16">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-clay-500 to-clay-700">Me</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="reveal-up flex-shrink-0">
            <div className="relative w-64 h-72 md:w-72 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-ink-900/5 to-ink-900/0 border border-ink-900/10 backdrop-blur-sm">
              <img src={AboutImage} alt="" className="w-full h-full object-cover p-8" />
            </div>
          </div>

          <div className="flex-1">
            <p className="reveal-up text-lg text-ink-700/80 leading-relaxed mb-6">
              I'm a Software Engineer with hands-on experience building and supporting scalable
              web applications using <span className="text-ink-900 font-medium">React.js, Node.js and Python</span>.
              I work closely with REST APIs — integrating, testing with Postman, and tracing production
              issues through log analysis and debugging.
            </p>
            <p className="reveal-up text-lg text-ink-700/80 leading-relaxed mb-10">
              I've also worked within ITSM workflows to resolve issues, automate processes, and keep
              systems running smoothly — bridging the gap between backend logic and real user-facing
              problems.
            </p>

            <div className="reveal-up grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center rounded-xl border border-ink-900/10 bg-ink-900/5 py-5 px-2 backdrop-blur-sm">
                  <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-clay-500 to-clay-700">
                    {stat.value}
                  </h3>
                  <p className="mt-1 text-xs md:text-sm text-ink-700/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
