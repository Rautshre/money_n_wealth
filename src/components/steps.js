import React, { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import './steps.css'

const cardData = [
  {
    title: "Retirement Plans",
    desc: "Plan for a secure and comfortable retirement with our personalized retirement solutions.",
    label: "01"
  },
  {
    title: "Estate Plans",
    desc: "Protect your legacy and ensure your assets are distributed according to your wishes.",
    label: "02"
  },
  {
    title: "Financial Planning",
    desc: "Achieve your financial goals with expert planning and ongoing support.",
    label: "03"
  },
  {
    title: "Life Insurance",
    desc: "Safeguard your loved ones with comprehensive life insurance coverage.",
    label: "04"
  },
  {
    title: "Mutual Funds",
    desc: "Grow your wealth by investing in a diverse range of mutual funds.",
    label: "05"
  },
  {
    title: "Health Insurance",
    desc: "Protect yourself and your family with reliable health insurance plans.",
    label: "06"
  }
];

const Steps = () => {
  const navigate = useNavigate();
  const cardRefs = useRef([]);

  useEffect(() => {
    // Initial: stack all cards at center, no rotation, zIndex by order
    gsap.set(cardRefs.current, {
      x: 0,
      y: 0,
      rotate: 0,
      zIndex: (i) => cardData.length - i,
      scale: 1,
      opacity: 1,
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    });

    // Animate: pop out and fan like a hand of cards
    cardRefs.current.forEach((card, i) => {
      const total = cardData.length;
      const spread = 60; // total spread in degrees
      const baseAngle = -spread / 2;
      const angle = baseAngle + (spread / (total - 1)) * i;
      const radius = 180; // how far cards fan out from center

      gsap.to(card, {
        delay: 0.5 + i * 0.18,
        duration: 0.7,
        x: radius * Math.sin((angle * Math.PI) / 180),
        y: -Math.abs(radius * 0.4 * Math.cos((angle * Math.PI) / 180)),
        rotate: angle,
        scale: 1,
        opacity: 1,
        ease: 'back.out(1.7)'
      });
    });
  }, []);

  const handleExploreClick = () => {
    navigate('/financial-plans');
  };

  return (
    <div className="steps-container1 thq-section-padding" style={{ position: 'relative', minHeight: 500 }}>
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
              <button
                className="thq-button-filled thq-button-animated steps-button"
                onClick={handleExploreClick}
              >
                <span className="thq-body-small">Explore Solutions</span>
              </button>
            </div>
          </div>
          <div className="steps-cards-fan" style={{ position: 'relative', width: 400, height: 320, margin: '0 auto' }}>
            {cardData.map((card, idx) => (
              <div
                className="steps-card-fan thq-card"
                key={idx}
                ref={el => (cardRefs.current[idx] = el)}
                style={{
                  width: 220,
                  minHeight: 140,
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  boxShadow: '0 4px 24px rgba(30,136,229,0.09)'
                }}
              >
                <h2 className="thq-heading-2">{card.title}</h2>
                <span className="thq-body-small">{card.desc}</span>
                <label className="thq-heading-3" style={{ position: 'absolute', bottom: 12, right: 18, color: '#4f8cff', fontWeight: 700 }}>{card.label}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps
