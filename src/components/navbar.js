import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import './navbar.css'

const Navbar = (props) => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true)

  // Toggle mode and update CSS variables on :root
  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      // Light mode
      root.style.setProperty('--color-bg', '#fff')
      root.style.setProperty('--color-title', '#1f2937')
      root.style.setProperty('--color-title-light', '#1f2937')
      root.style.setProperty('--color-primary', '#fff')
      root.style.setProperty('--color-section-bg', '#f9fafb')
      root.style.setProperty('--color-card-bg', '#fff')
      root.style.setProperty('--color-desc', '#444')
      root.style.setProperty('--color-link', '#1f2937')
      root.style.setProperty('--color-btn-bg', '#ff8800')
      root.style.setProperty('--color-btn-bg-hover', '#ff9900')
    } else {
      // Dark mode (current)
      root.style.setProperty('--color-bg', '#111827')
      root.style.setProperty('--color-title', '#fff')
      root.style.setProperty('--color-title-light', '#fff')
      root.style.setProperty('--color-primary', '#1f2937')
      root.style.setProperty('--color-section-bg', '#1f2937')
      root.style.setProperty('--color-card-bg', '#222c37')
      root.style.setProperty('--color-desc', '#e5e7eb')
      root.style.setProperty('--color-link', '#fff')
      root.style.setProperty('--color-btn-bg', '#22c55e')
      root.style.setProperty('--color-btn-bg-hover', '#16a34a')
    }
  }, [darkMode])

  const handleGetStarted = () => {
    navigate('/login')
  }
  const handleTips = () => {
    navigate('/blog')
  }
  const handleBecomePartner = () => {
    navigate('/become-a-partner')
  }
  const handleToggleMode = () => {
    setDarkMode((prev) => !prev)
  }

  return (
    <header className="navbar-container">
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">
        <img
          alt={props.logoAlt}
          src={props.logoSrc}
          className="navbar-image1"
        />
        <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
          <nav className="navbar-links1">
            <span className="thq-link thq-body-small" onClick={() => navigate('/')}>{props.home}</span>
            <span className="thq-link thq-body-small" onClick={handleTips} style={{cursor:'pointer'}}>{props.tips}</span>
            <span className="thq-link thq-body-small" onClick={() => navigate('/insurance')} style={{cursor:'pointer'}}>{props.Insurance}</span>
            <span className="thq-link thq-body-small" onClick={() => navigate('/learning-platform')} style={{cursor:'pointer'}}>Learning Platform</span>
            <span className="thq-link thq-body-small">{props.contact}</span>
          </nav>
          <div className="navbar-buttons1">
            <button
              className="navbar-action21 thq-button-filled thq-button-animated"
              onClick={handleBecomePartner}
              style={{marginRight: '12px'}}
            >
              <span className="thq-body-small">Become a Partner</span>
            </button>
            <button
              className="navbar-action21 thq-button-filled thq-button-animated"
              onClick={handleGetStarted}
              style={{marginRight: '12px'}}
            >
              <span className="thq-body-small">{props.getStarted}</span>
            </button>
            <button
              className="navbar-toggle-mode-btn"
              onClick={handleToggleMode}
              aria-label="Toggle light/dark mode"
            >
              <span className="toggle-icon">{darkMode ? '🌞' : '🌙'}</span>
            </button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar-icon1">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
          <div className="navbar-nav">
            <div className="navbar-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar-logo"
              />
              <div data-thq="thq-close-menu" className="navbar-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar-links2">
              <span className="thq-link thq-body-small" onClick={() => navigate('/')}>{props.home}</span>
              <span className="thq-link thq-body-small" onClick={handleTips}>{props.tips}</span>
              <span className="thq-link thq-body-small" onClick={() => navigate('/insurance')} style={{cursor:'pointer'}}>{props.Insurance}</span>
              <span className="thq-link thq-body-small" onClick={() => navigate('/learning-platform')} style={{cursor:'pointer'}}>Learning Platform</span>
              <span className="thq-link thq-body-small">{props.contact}</span>
            </nav>
          </div>
          <div className="navbar-buttons2">
            <button className="thq-button-filled" onClick={handleBecomePartner} style={{marginRight: '10px'}}>Become a Partner</button>
            <button className="thq-button-filled" onClick={handleGetStarted} style={{marginRight: '10px'}}>{props.getStarted}</button>
            <button
              className="thq-button-filled"
              onClick={handleToggleMode}
              aria-label="Toggle light/dark mode"
              style={{
                background: 'var(--color-btn-bg)',
                color: 'var(--color-btn-text)',
                minWidth: 40,
                padding: '0 16px'
              }}
            >
              {darkMode ? '🌞' : '🌙'}
            </button>
          </div>
        </div>
      </header>
    </header>
  )
}

Navbar.defaultProps = {
  logoSrc:
    'https://res.cloudinary.com/dmu276kaq/image/upload/v1748441700/money_n_wealth_mckxrd.png',
  logoAlt: 'Money and Wealth Management',
  home: 'Home',
  tips: 'Blog',
  become_a_partner: 'become_a_partner',
  Insurance: 'Insurance',
  contact: 'Contact Us',
  getStarted: 'Get Started',
}

Navbar.propTypes = {
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  home: PropTypes.string,
  tips: PropTypes.string,
  become_a_partner: PropTypes.string,
  Insurance: PropTypes.string,
  contact: PropTypes.string,
  getStarted: PropTypes.string,
}

export default Navbar
