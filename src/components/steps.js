import React from 'react'
import './steps.css'

const Steps = () => {
  return (
    <div className="steps-container1 thq-section-padding">
      <div className="steps-max-width thq-section-max-width">
        <div className="steps-container2 thq-grid-2">
          <div className="steps-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Solutions
            </h2>
            <p className="thq-body-large">
              We offer a comprehensive suite of financial solutions tailored to your needs, including Retirement Plans, Estate Plans, Financial Planning, Life Insurance, Mutual Funds, and Health Insurance. Secure your future and achieve your goals with expert guidance every step of the way.
            </p>
            <div className="steps-actions">
              <button className="thq-button-filled thq-button-animated steps-button">
                <span className="thq-body-small">Explore Solutions</span>
              </button>
            </div>
          </div>
          <div className="steps-container3">
            <div className="steps-container4 thq-card">
              <h2 className="thq-heading-2">Retirement Plans</h2>
              <span className="steps-text14 thq-body-small">
                Plan for a secure and comfortable retirement with our personalized retirement solutions.
              </span>
              <label className="steps-text15 thq-heading-3">01</label>
            </div>
            <div className="steps-container5 thq-card">
              <h2 className="thq-heading-2">Estate Plans</h2>
              <span className="steps-text17 thq-body-small">
                Protect your legacy and ensure your assets are distributed according to your wishes.
              </span>
              <label className="steps-text18 thq-heading-3">02</label>
            </div>
            <div className="steps-container6 thq-card">
              <h2 className="thq-heading-2">Financial Planning</h2>
              <span className="steps-text20 thq-body-small">
                Achieve your financial goals with expert planning and ongoing support.
              </span>
              <label className="steps-text21 thq-heading-3">03</label>
            </div>
            <div className="steps-container7 thq-card">
              <h2 className="thq-heading-2">Life Insurance</h2>
              <span className="steps-text23 thq-body-small">
                Safeguard your loved ones with comprehensive life insurance coverage.
              </span>
              <label className="steps-text24 thq-heading-3">04</label>
            </div>
            <div className="steps-container8 thq-card">
              <h2 className="thq-heading-2">Mutual Funds</h2>
              <span className="steps-text25 thq-body-small">
                Grow your wealth by investing in a diverse range of mutual funds.
              </span>
              <label className="steps-text26 thq-heading-3">05</label>
            </div>
            <div className="steps-container9 thq-card">
              <h2 className="thq-heading-2">Health Insurance</h2>
              <span className="steps-text27 thq-body-small">
                Protect yourself and your family with reliable health insurance plans.
              </span>
              <label className="steps-text28 thq-heading-3">06</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps
