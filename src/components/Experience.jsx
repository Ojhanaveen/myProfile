import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const roles = [
  {
    title: 'Software Engineer',
    company: 'Cap Corporate AI Solution',
    location: 'Chennai, India',
    period: 'Mar 2026 — Present',
    points: [
      'Contributing to PolicyAI, focusing on building and supporting backend-driven workflows',
      'Integrated and tested REST APIs using Postman to validate request/response flows',
      'Diagnosed and resolved production issues through debugging and log analysis',
      'Worked on ITSM-based workflows for ticket creation, tracking, and incident resolution',
    ],
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Cap Corporate AI Solution',
    location: 'Chennai, India',
    period: 'Sep 2025 — Feb 2026',
    points: [
      'Developed and optimized responsive UI components for BallotDA using modern JavaScript practices',
      'Integrated frontend components with backend services for real-time data rendering',
      'Assisted in testing API responses using Postman and validating data flows',
      'Worked with authenticated endpoints and debugged UI and API-related issues',
    ],
  },
  {
    title: 'AI Language Trainer',
    company: 'Outlier',
    location: 'San Francisco, USA',
    period: 'Sep 2024 — Feb 2025',
    points: [
      'Improved LLM performance using prompt engineering and test case design, increasing response accuracy by 40%',
      'Coordinated with cross-functional teams across multiple tasks, improving delivery efficiency by 40%',
    ],
  },
]

const Experience = () => {
  const containerRef = useScrollReveal()

  return (
    <div className="bg-cream-50 text-ink-900 py-24" id="experience" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <h2 className="reveal-up text-4xl font-bold text-center mb-16">
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-clay-500 to-clay-700">Experience</span>
        </h2>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-clay-500/50 via-clay-600/30 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {roles.map((role, idx) => (
              <div
                key={role.title + role.period}
                className={`reveal-up relative pl-10 md:pl-0 md:w-1/2 ${
                  idx % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'
                }`}
              >
                <span className="absolute left-0 md:left-auto md:right-0 top-1.5 w-3 h-3 rounded-full bg-clay-500 shadow-[0_0_12px_2px_rgba(217,119,87,0.5)]"
                  style={idx % 2 === 0 ? { right: '-6px' } : { left: '-6px' }}
                />
                <div className="rounded-2xl border border-ink-900/10 bg-ink-900/5 backdrop-blur-sm p-6 transition-all duration-300 hover:border-clay-500/30 hover:-translate-y-1">
                  <p className="text-xs uppercase tracking-wide text-clay-600 font-medium mb-1">{role.period}</p>
                  <h3 className="text-xl font-bold">{role.title}</h3>
                  <p className="text-ink-700/60 text-sm mb-4">{role.company} · {role.location}</p>
                  <ul className="space-y-2 text-sm text-ink-700/80 list-disc list-inside text-left">
                    {role.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
