import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaShieldAlt, FaWallet, FaChartLine, FaShoppingCart } from 'react-icons/fa'
import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    id: 1,
    name: 'CallMask',
    tagline: 'Dynamic Virtual Number Masking & Bridging System',
    description:
      'Full-stack call/number masking platform that bridges customers and service providers without exposing real phone numbers — with live Twilio/Exotel webhook simulation and a resilient local-DB fallback.',
    tech: ['React (Vite)', 'Node.js', 'Express', 'MongoDB', 'Twilio/Exotel Webhooks'],
    icon: <FaShieldAlt />,
    image: `${import.meta.env.BASE_URL}CallMask.png`,
    gradient: 'from-clay-600/25 to-clay-400/15',
    demo: 'https://callmask.netlify.app/',
    github: 'https://github.com/Ojhanaveen/callMask',
  },
  {
    id: 2,
    name: 'Expense Tracker',
    tagline: 'Expense Tracking Built for How India Actually Spends',
    description:
      'SOLID-layered expense tracker that auto-captures quick commerce, food delivery, cabs, UPI and EMIs — Smart Add parses forwarded bank/UPI SMS, and an OCR + Gemini pipeline turns receipt photos or PDFs into categorized transactions.',
    tech: ['Next.js', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'TanStack Query', 'Gemini API', 'RapidOCR'],
    icon: <FaWallet />,
    image: `${import.meta.env.BASE_URL}ExpenseTracker.png`,
    gradient: 'from-clay-400/25 to-clay-600/15',
    demo: 'https://expense-tracker-eight-phi-22.vercel.app/login',
    github: 'https://github.com/Ojhanaveen/Expense_Tracker',
  },
  {
    id: 3,
    name: 'Finma',
    tagline: 'Premium Role-Based Financial Management Engine',
    description:
      'Enterprise-grade financial engine with granular RBAC across Viewer, Analyst and Admin tiers, real-time dashboards with trend and spending-breakdown analytics, and backend-enforced validation via Joi.',
    tech: ['React 19', 'Vite', 'Node.js', 'Express 5', 'MongoDB', 'Recharts', 'Tailwind CSS'],
    icon: <FaChartLine />,
    image: `${import.meta.env.BASE_URL}Finma.png`,
    gradient: 'from-clay-300/25 to-clay-500/15',
    demo: 'https://finma-gray-theta.vercel.app/',
    github: 'https://github.com/Ojhanaveen/Finma',
  },
  {
    id: 4,
    name: 'Qkart',
    tagline: 'Full-Stack E-Commerce Platform',
    description:
      'E-commerce application with a Material UI storefront backed by a full Node.js/Express service layer — covering product listing, cart, and checkout flows end-to-end.',
    tech: ['React.js', 'Material UI', 'Node.js', 'Express'],
    icon: <FaShoppingCart />,
    gradient: 'from-clay-500/25 to-clay-300/15',
    demo: 'https://qkartfrontend-tau.vercel.app/',
    github: null,
  },
]

const Projects = () => {
  const containerRef = useScrollReveal()

  return (
    <div className="bg-cream-50 text-ink-900 py-24" id="project" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <h2 className="reveal-up text-4xl font-bold text-center mb-4">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-clay-500 to-clay-700">Projects</span>
        </h2>
        <p className="reveal-up text-center text-ink-700/70 mb-16 max-w-xl mx-auto">
          A selection of full-stack builds spanning fintech, telecom and e-commerce.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="reveal-up group rounded-2xl border border-ink-900/10 bg-ink-900/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-clay-500/30 hover:-translate-y-1.5"
            >
              <div className={`h-40 flex items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient} text-5xl text-ink-900/80`}>
                {project.image ? (
                  <img src={project.image} alt={`${project.name} preview`} className="w-full h-full object-cover" />
                ) : (
                  project.icon
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-sm text-clay-600 mb-3">{project.tagline}</p>
                <p className="text-sm text-ink-700/80 leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-ink-900/5 border border-ink-900/10 text-ink-700/60">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r from-clay-500 to-clay-600 text-cream-50 px-4 py-2 rounded-full transition-transform duration-300 hover:scale-105"
                  >
                    <FaExternalLinkAlt className="text-xs" /> Live Demo
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium border border-ink-900/20 px-4 py-2 rounded-full transition-all duration-300 hover:bg-ink-900/10"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal-up text-center mt-14">
          <a
            href="https://github.com/Ojhanaveen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-ink-700/80 hover:text-ink-900 border border-ink-900/15 px-6 py-2.5 rounded-full transition-all duration-300 hover:bg-ink-900/5"
          >
            <FaGithub /> View all repositories on GitHub
          </a>
        </p>
      </div>
    </div>
  )
}

export default Projects
