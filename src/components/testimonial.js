import React from 'react'
import './testimonial.css'

const stats = [
  {
    number: '30+',
    title: 'Years of Rich Experience',
    desc: 'Helping clients manage wealth and achieve investment goals for over 3 decades.',
    icon: '💼',
  },
  {
    number: '90+',
    title: 'Own Branches',
    desc: 'Our experts are accessible across the country to provide personalized investment guidance.',
    icon: '🏢',
  },
  {
    number: '50+',
    title: 'Investment Products',
    desc: 'A one-stop hub for all your investment and wealth management needs.',
    icon: '📈',
  },
  {
    number: '100+',
    title: 'Research Reports',
    desc: 'Our research team provides deep insights and effective guidance for every investment aspect.',
    icon: '🔬',
  },
  {
    number: '5000+',
    title: 'Happy Clients',
    desc: 'We focus on building long-term relationships and delivering tailored solutions.',
    icon: '🤝',
  },
  {
    number: '24/7',
    title: 'Expert Support',
    desc: 'Our team is always available to answer your queries and guide your financial journey.',
    icon: '🕑',
  },
]

const Testimonial = () => (
  <section className="stats-section-bg">
    <div className="stats-section-container">
      <h2 className="stats-section-title">
        <span className="stats-accent">Why we are your ideal</span> investment partner?
      </h2>
      <div className="stats-grid">
        {stats.map((item, idx) => (
          <div className="stats-card" key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="stats-icon">{item.icon}</div>
            <div className="stats-number">{item.number}</div>
            <div className="stats-title">{item.title}</div>
            <div className="stats-desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Testimonial