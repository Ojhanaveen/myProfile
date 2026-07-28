import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const skillGroups = [
  { title: 'Languages', items: ['JavaScript', 'Python'] },
  { title: 'Frameworks & Libraries', items: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap'] },
  { title: 'Database', items: ['MongoDB', 'MongoDB Atlas', 'Mongoose', "PostgreSQl"] },
  { title: 'Backend', items: ['REST APIs', 'Postman',] },
  { title: 'Debugging', items: ['Log Analysis', 'Error Handling', 'Issue Troubleshooting'] },
  { title: 'Authentication', items: ['JWT (Bearer Token)', 'API Key', 'Basic Auth'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Render'] },
]

const Skills = () => {
  const containerRef = useScrollReveal()

  return (
    <div className="bg-cream-50 text-ink-900 py-24" id="skills" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <h2 className="reveal-up text-4xl font-bold text-center mb-4">
          Skills &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-clay-500 to-clay-700">Technologies</span>
        </h2>
        <p className="reveal-up text-center text-ink-700/70 mb-16 max-w-xl mx-auto">
          The stack and tools I use to build, test, and debug production systems.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="reveal-up rounded-2xl border border-ink-900/10 bg-ink-900/5 backdrop-blur-sm p-6 transition-all duration-300 hover:border-clay-500/30 hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-clay-500 to-clay-700">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1 rounded-full bg-ink-900/5 border border-ink-900/10 text-ink-700/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
