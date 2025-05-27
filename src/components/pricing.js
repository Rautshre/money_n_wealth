import React from 'react'
import './pricing.css'

const approaches = [
  {
    title: 'Personalized Planning',
    desc: 'We tailor financial strategies to your unique goals and life stage, ensuring every step is right for you.',
    icon: '💡',
  },
  {
    title: 'Expert Guidance',
    desc: 'Our experienced advisors provide ongoing support and insights to help you make informed decisions.',
    icon: '🎓',
  },
  {
    title: 'Holistic Wealth',
    desc: 'We look at your entire financial picture, from investments to insurance, for true peace of mind.',
    icon: '🌱',
  },
  {
    title: 'Transparent Process',
    desc: 'Clear communication and honest advice at every stage. No hidden fees, just real value.',
    icon: '🔍',
  },
  {
    title: 'Cutting-Edge Tools',
    desc: 'Access modern digital tools and dashboards to track your progress and adjust your plan anytime.',
    icon: '🛠️',
  },
  {
    title: 'Continuous Learning',
    desc: 'Stay empowered with our blogs, videos, and resources to keep your financial knowledge growing.',
    icon: '📚',
  },
]

const Pricing = () => {
  return (
    <section className="pricing-approach-section">
      <div className="pricing-approach-bg"></div>
      <div className="pricing-approach-content thq-section-max-width">
        <h2 className="pricing-approach-title thq-heading-2">Our Approach to Wealth</h2>
        <p className="pricing-approach-desc thq-body-large">
          Discover how we help you achieve financial freedom with a proven, holistic, and transparent approach.
        </p>
        <div className="pricing-approach-cards">
          {approaches.map((item, idx) => (
            <div className="pricing-approach-card thq-card" key={idx} style={{ animationDelay: `${idx * 0.15}s` }}>
              <div className="pricing-approach-icon">{item.icon}</div>
              <h3 className="pricing-approach-card-title thq-heading-3">{item.title}</h3>
              <p className="pricing-approach-card-desc thq-body-small">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
