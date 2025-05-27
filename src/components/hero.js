import React from 'react'
import PropTypes from 'prop-types'
import './hero.css'

// const demoTicker = [
//   { symbol: 'NIFTY', price: '22,500.45', change: '+0.45%', icon: '📈' },
//   { symbol: 'SENSEX', price: '75,200.10', change: '-0.12%', icon: '📊' },
//   { symbol: 'GOLD', price: '₹72,300', change: '+0.18%', icon: '🥇' },
//   { symbol: 'USD/INR', price: '83.12', change: '-0.05%', icon: '💱' },
//   { symbol: 'BTC', price: '₹5,900,000', change: '+1.2%', icon: '₿' },
// ]

const investmentOptions = [
  { icon: '📈', label: 'Equity or Stocks' },
  { icon: '📑', label: 'Future & Options' },
  { icon: '💲', label: 'US Stocks' },
  { icon: '🔄', label: 'Alternative Investment Funds' },
  { icon: '₹', label: 'Mutual Fund' },
  { icon: '🪙', label: 'Commodities' },
  { icon: '💼', label: 'Portfolio Management Services' },
  { icon: '📢', label: 'Initial Public Offering (IPO)' },
  { icon: '🎫', label: 'Bonds' },
  { icon: '🧑‍💼', label: 'Intelligent Advisory Portfolios' },
  { icon: '🛡️', label: 'Insurance' },
  { icon: '💰', label: 'Fixed Deposits' },
]

const Hero = (props) => {
  return (
    <div className="hero-header78">
      <div className="hero-column thq-section-padding thq-section-max-width">
        <div className="hero-content1">
          <h1 className="hero-text1 thq-heading-1">{props.heading1}</h1>
          <p className="hero-text2 thq-body-large">{props.content1}</p>
        </div>
        <div className="hero-actions">
          <button className="thq-button-filled hero-button1">
            <span className="thq-body-small">{props.action1}</span>
          </button>
          <button className="thq-button-outline hero-button2">
            <span className="thq-body-small">{props.action2}</span>
          </button>
        </div>
      </div>
      {/* Market Ticker as Grid of Cards */}
      {/* <div className="hero-market-ticker-grid-section">
        <span className="hero-ticker-label">Live Market</span>
        <div className="hero-market-ticker-grid">
          {demoTicker.map((item, idx) => (
            <div className="hero-ticker-card" key={idx}>
              <span className="hero-ticker-icon">{item.icon}</span>
              <span className="hero-ticker-symbol">{item.symbol}</span>
              <span className="hero-ticker-price">{item.price}</span>
              <span
                className={`hero-ticker-change ${
                  item.change.startsWith('+') ? 'positive' : 'negative'
                }`}
              >
                {item.change}
              </span>
            </div>
          ))}
        </div>
      </div> */}
      {/* Investment Opportunities Grid */}
      <div className="hero-investment-section">
        <h2 className="hero-investment-title">A World Of Investment Opportunities</h2>
        <div className="hero-investment-grid">
          {investmentOptions.map((opt, idx) => (
            <div className="hero-investment-card" key={idx}>
              <div className="hero-investment-icon">{opt.icon}</div>
              <div className="hero-investment-label">{opt.label}</div>
              <div className="hero-investment-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  content1:
    'Our professional wealth management services help you make the most of your money and secure your financial future.',
  heading1: 'Take Control of Your Finances',
  action2: 'Learn More',
  action1: 'Get Started',
}

Hero.propTypes = {
  content1: PropTypes.string,
  heading1: PropTypes.string,
  action2: PropTypes.string,
  action1: PropTypes.string,
}

export default Hero
