import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import gsap from 'gsap'
import './hero.css'

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
  const heroRef = useRef()
  const contentRef = useRef()
  const actionsRef = useRef()
  const gridRef = useRef([])
  const fullImgRef = useRef()
  const leftImgRef = useRef()
  const rightImgRef = useRef()
  const [showSplit, setShowSplit] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [typedHeading, setTypedHeading] = useState('')
  const [typedPara, setTypedPara] = useState('')

  // Typewriter effect for heading and paragraph
  useEffect(() => {
    if (showContent) {
      let headingIdx = 0
      let paraIdx = 0

      const typeHeading = () => {
        if (headingIdx <= props.heading1.length) {
          setTypedHeading(props.heading1.slice(0, headingIdx))
          headingIdx++
          setTimeout(typeHeading, 35)
        } else {
          setTimeout(typePara, 250)
        }
      }

      const typePara = () => {
        if (paraIdx <= props.content1.length) {
          setTypedPara(props.content1.slice(0, paraIdx))
          paraIdx++
          setTimeout(typePara, 18)
        }
      }

      typeHeading()
    }
  }, [showContent, props.heading1, props.content1])

  useEffect(() => {
    // Step 1: Show full treasure image
    gsap.fromTo(
      fullImgRef.current,
      { opacity: 0, scale: 0.8, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        onComplete: () => {
          setTimeout(() => {
            // Step 2: Hide full image, show split images
            gsap.to(fullImgRef.current, {
              opacity: 0,
              duration: 0.3,
              onComplete: () => {
                setShowSplit(true)
                setTimeout(() => {
                  // Step 3: Animate split
                  gsap.fromTo(
                    [leftImgRef.current, rightImgRef.current],
                    { opacity: 0, scale: 0.95, y: 20 },
                    { opacity: 1, scale: 1, y: 0, duration: 0.4, stagger: 0.1, ease: 'power2.out' }
                  )
                  gsap.to(leftImgRef.current, {
                    x: '-110%',
                    duration: 0.8,
                    delay: 0.3,
                    ease: 'power3.inOut',
                  })
                  gsap.to(rightImgRef.current, {
                    x: '110%',
                    duration: 0.8,
                    delay: 0.3,
                    ease: 'power3.inOut',
                    onComplete: () => {
                      setShowContent(true)
                      // Animate in actions and grid after text
                      setTimeout(() => {
                        gsap.fromTo(
                          actionsRef.current,
                          { y: 40, opacity: 0 },
                          { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
                        )
                        gsap.fromTo(
                          gridRef.current,
                          { scale: 0.8, opacity: 0, y: 40 },
                          {
                            scale: 1,
                            opacity: 1,
                            y: 0,
                            duration: 0.7,
                            stagger: 0.07,
                            delay: 0.2,
                            ease: 'back.out(1.7)',
                          }
                        )
                      }, 1200)
                    }
                  })
                }, 100)
              }
            })
          }, 700)
        }
      }
    )
  }, [])

  return (
    <div className="hero-header78" ref={heroRef}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 160, position: 'relative' }}>
        {/* Full treasure image */}
        <div ref={fullImgRef} style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
          <img
            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202504/is-it-a-sign-of-good-fortune--a-warning-of-bad-luck--or-simply-a-random-event-the-answer-depends-on-152325785-16x9_0.jpg?VersionId=3RPCE6rgq4TGMYVv6Doxcbo_GC897Vpk&size=690:388"
            alt="Treasure"
            style={{ width: 160, maxWidth: '90vw', display: 'block' }}
          />
        </div>
        {/* Split images */}
        {showSplit && (
          <>
            <div ref={leftImgRef} style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-100%)',
              zIndex: 2,
              width: 80,
              overflow: 'hidden'
            }}>
              <img
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202504/is-it-a-sign-of-good-fortune--a-warning-of-bad-luck--or-simply-a-random-event-the-answer-depends-on-152325785-16x9_0.jpg?VersionId=3RPCE6rgq4TGMYVv6Doxcbo_GC897Vpk&size=690:388"
                alt="Treasure Left"
                style={{
                  width: 160,
                  objectFit: 'cover',
                  objectPosition: 'left',
                  clipPath: 'inset(0 80px 0 0)'
                }}
              />
            </div>
            <div ref={rightImgRef} style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(0%)',
              zIndex: 2,
              width: 80,
              overflow: 'hidden'
            }}>
              <img
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202504/is-it-a-sign-of-good-fortune--a-warning-of-bad-luck--or-simply-a-random-event-the-answer-depends-on-152325785-16x9_0.jpg?VersionId=3RPCE6rgq4TGMYVv6Doxcbo_GC897Vpk&size=690:388"
                alt="Treasure Right"
                style={{
                  width: 160,
                  objectFit: 'cover',
                  objectPosition: 'right',
                  clipPath: 'inset(0 0 0 80px)'
                }}
              />
            </div>
          </>
        )}
      </div>
      <div className="hero-column thq-section-padding thq-section-max-width">
        <div className="hero-content1" ref={contentRef}>
          <h1 className="hero-text1 thq-heading-1">
            {showContent ? typedHeading : ''}
          </h1>
          <p className="hero-text2 thq-body-large">
            {showContent ? typedPara : ''}
          </p>
        </div>
        <div className="hero-actions" ref={actionsRef} style={{ opacity: 0 }}>
          <button className="thq-button-filled hero-button1">
            <span className="thq-body-small">{props.action1}</span>
          </button>
          <button className="thq-button-outline hero-button2">
            <span className="thq-body-small">{props.action2}</span>
          </button>
        </div>
      </div>
      <div className="hero-investment-section">
        <h2 className="hero-investment-title">A World Of Investment Opportunities</h2>
        <div className="hero-investment-grid">
          {investmentOptions.map((opt, idx) => (
            <div
              className="hero-investment-card"
              key={idx}
              ref={(el) => (gridRef.current[idx] = el)}
            >
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
